#include "chessdoc.h"
#include "chesssquare.h"
#include <QTextStream>
#include <QFile>

ChessSquare** grid;

bool dataLoaded = false;

ChessDoc::ChessDoc(QObject *parent) : QObject(parent)
{
    grid = new ChessSquare*[8];
    for(int i = 0; i < 8; i++){
        grid[i] = new ChessSquare[8];
    }
    for(int i = 0; i < 8; i++){
        for(int j = 0; j < 8; j ++){
            ChessSquare currentSquare = *new ChessSquare();
            if((i+1)%2 == 0){
                //Even number row -> begins with white tile
                if((j+1)%2==0){
                    //Even field column -> black tile
                    currentSquare.squareColor = 0;
                } else {
                    //Odd field column -> white tile
                    currentSquare.squareColor = 1;
                }
            } else if((i+1)%2==1){
                //Uneven number row -> begins with black tile
                if((j+1)%2==0){
                    //Even field column -> white tile
                    currentSquare.squareColor = 1;
                } else {
                    //Odd field column -> black tile
                    currentSquare.squareColor = 0;
                }
            }
            grid[i][j] = currentSquare;
        }
    }
}

ChessDoc::~ChessDoc(){
    for(int i = 0; i< 8; i++){
        delete grid[i];
    }
    delete grid;
}

void ChessDoc::load(QString file){
    //Load
    QFile chessData(file);
        if(!chessData.open(QIODevice::ReadOnly | QIODevice::Text))
                return;
            int i = 0;
                QTextStream in(&chessData);
                while (!in.atEnd()) {
                    QString line = in.readLine();
                    QList<QString> rowData = line.split(',');
                    for(int j = 0; j<8; j++){
                        if(rowData[j] != '-'){
                            int oldColor = grid[i][j].squareColor;
                            grid[i][j].squareColor = oldColor;
                            //Set color
                            if(rowData[j][0] == 'B'){
                                grid[i][j].figureColor = 0;
                            } else if(rowData[j][0] == 'W'){
                                grid[i][j].figureColor = 1;
                            }

                            //Set figure type
                            /**
                             * 0 - King
                             * 1 - Queeen
                             * 2 - Bishop
                             * 3 - Knight
                             * 4 - Rook
                             * 5 - Pawn
                             */
                           if(rowData[j][1] == 'P'){
                               grid[i][j].figureType = 5;
                           } else if(rowData[j][1] == 'R'){
                               grid[i][j].figureType = 4;
                           } else if(rowData[j][1] == 'N'){
                               grid[i][j].figureType = 3;
                           } else if(rowData[j][1] == 'B'){
                               grid[i][j].figureType = 2;
                           } else if(rowData[j][1] == 'Q'){
                               grid[i][j].figureType = 1;
                           } else if(rowData[j][1] == 'K'){
                               grid[i][j].figureType = 0;
                           }
                            grid[i][j].isEmpty = false;
                        } else{
                            //Current field is empty
                            grid[i][j].isEmpty = true;
                        }
                    }
                    i++;
                }
    dataLoaded = true;
    emit chessDataChanged();
}

void ChessDoc::save(QString file){
    //Save
    QFile chessData(file);
        if (!chessData.open(QIODevice::WriteOnly | QIODevice::Text))
            return;

        QTextStream stream(&chessData);
        for(int i = 0; i<8; i++){
            for(int j = 0; j < 8; j++){
                if(grid[i][j].isEmpty){
                    stream << '-';
                } else{
                    if(grid[i][j].figureColor==0){
                        stream << 'B';
                    } else if (grid[i][j].figureColor==1){
                        stream << 'W';
                    }
                    //Not empty
                    switch(grid[i][j].figureType){
                    /**
                     * 0 - King
                     * 1 - Queeen
                     * 2 - Bishop
                     * 3 - Knight
                     * 4 - Rook
                     * 5 - Pawn
                     */
                        case 0:
                            stream << 'K';
                        break;
                        case 1:
                            stream << 'Q';
                        break;
                        case 2:
                            stream << 'B';
                        break;
                        case 3:
                            stream << 'N';
                        break;
                        case 4:
                            stream << 'R';
                        break;
                        case 5:
                            stream << 'P';
                        break;
                    }
                }

                stream << ',';
            }
            stream << '\n';
        }

        chessData.close();
    emit chessDataChanged();
}
