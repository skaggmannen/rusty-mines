mod utils;

use std::fmt;

use wasm_bindgen::prelude::*;
use js_sys::Math::random;

#[wasm_bindgen]
pub struct Board {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

#[wasm_bindgen]
impl Board {
    pub fn new(width: u32, height: u32) -> Board {
        utils::set_panic_hook();

        let cells = Board::create_cells(width, height);

        Board{
            width,
            height,
            cells,
        }
    }

    pub fn render(&self) -> String {
        self.to_string()
    }

    pub fn reveal(&mut self, row: u32, col: u32) {
        if self.cell_at(row, col).revealed {
            return;
        }

        if self.cell_at(row, col).flagged {
            return;
        }

        let neighbors = self.get_neighbors(row, col);
        let count = self.count_mines(&neighbors);

        {
            self.set_revealed(row, col, count);
        }

        if count == 0 {
            for (row, col) in neighbors {
                self.reveal(row, col);
            }
        }
    }

    pub fn done(&self) -> bool {
        self.has_revealed_mine() || self.all_non_mines_revealed()
    }

    fn has_revealed_mine(&self) -> bool {
        self.cells.iter()
            .filter(|cell| cell.mine)
            .filter(|cell| cell.revealed)
            .count() != 0
    }

    fn all_non_mines_revealed(&self) -> bool {
        self.cells.iter()
            .filter(|cell| !cell.mine)
            .filter(|cell| !cell.revealed)
            .count() == 0
    }

    pub fn flag(&mut self, row: u32, col: u32) {
        let cell = self.mut_cell_at(row, col);
        cell.flagged = !cell.flagged;
    }

    pub fn get_cell(&self, row: u32, col: u32) -> Cell {
        self.cell_at(row, col).clone()
    }

    fn set_revealed(&mut self, row: u32, col: u32, count: u8) {
        let cell = self.mut_cell_at(row, col);
        cell.revealed = true;
        cell.neighbors = count;
    }

    fn index_of(&self, row: u32, col: u32) -> usize {
        (row * self.width + col) as usize
    }

    fn cell_at(&self, row: u32, col: u32) -> &Cell {
        &self.cells[self.index_of(row, col)]
    }

    fn mut_cell_at(&mut self, row: u32, col: u32) -> &mut Cell {
        let idx = self.index_of(row, col);
        &mut self.cells[idx]
    }

    fn get_neighbors(&self, row: u32, col: u32) -> Vec<(u32, u32)> {
        let mut neighbors = Vec::new();

        if row > 0 {
            if col > 0 {
                neighbors.push((row-1, col-1));
            }
            neighbors.push((row-1, col));
            if col < self.width - 1 {
                neighbors.push((row-1, col+1));
            }
        }

        if col > 0 {
            neighbors.push((row, col - 1));
        }
        if col < self.width - 1 {
            neighbors.push((row, col + 1));
        }

        if row < self.height - 1 {
            if col > 0 {
                neighbors.push((row+1, col-1));
            }
            neighbors.push((row+1, col));
            if col < self.width - 1 {
                neighbors.push((row+1, col+1));
            }
        }

        neighbors
    }

    fn count_mines(&self, coords: &[(u32, u32)]) -> u8 {
        let mut count = 0;

        for (row, col) in coords {
            if self.cell_at(*row, *col).mine {
                count += 1;
            }
        }

        count
    }

    fn create_cells(width: u32, height: u32) -> Vec<Cell> {
        let mut cells: Vec<Cell> = (0..width*height)
            .map(|_| {
                Cell::clear()
            })
            .collect();

        // Place mines
        for _ in 0..10 {
            let mut idx = ( random() * ( width * height ) as f64 ).floor() as usize;
            while cells[idx].mine {
                idx = ( random() * ( width * height ) as f64 ).floor() as usize
            }

            cells[idx] = Cell::mine();
        }

        cells
    }
}

impl fmt::Display for Board {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for row in 0..self.height {
            for col in 0..self.width {
                write!(f, "{}", self.cell_at(row, col))?;
            }
            writeln!(f, "")?;
        }

        Ok(())
    }
}

#[wasm_bindgen]
#[derive(Clone)]
pub struct Cell {
    pub revealed: bool,
    pub flagged: bool,
    pub mine: bool,
    pub neighbors: u8,
}

#[wasm_bindgen]
impl Cell {
    pub fn mine() -> Cell {
        Cell{
            revealed: false,
            flagged: false,
            mine: true,
            neighbors: 0,
        }
    }

    pub fn clear() -> Cell {
        Cell{
            revealed: false,
            flagged: false,
            mine: false,
            neighbors: 0,
        }
    }
}

impl fmt::Display for Cell {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "□")?;

        Ok(())
    }
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rusty-mines!");
}