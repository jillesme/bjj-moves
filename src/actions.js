// constants

export const FILTER_MOVES = 'FILTER_MOVES';

// action creators

export function filterMoves(by) {
  return {
    type: FILTER_MOVES, by
  }
}

