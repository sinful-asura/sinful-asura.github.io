#include "chesssquare.h"


bool isEmpty;

/**
 * 0 - Black
 * 1 - White
 */
int squareColor;


/**
 * 0 - King
 * 1 - Queeen
 * 2 - Bishop
 * 3 - Knight
 * 4 - Rook
 * 5 - Pawn
 */
int figureType;

/**
 * 0 - Black
 * 1 - White
 */
int figureColor;

ChessSquare::ChessSquare()
{
    isEmpty = true;
}
