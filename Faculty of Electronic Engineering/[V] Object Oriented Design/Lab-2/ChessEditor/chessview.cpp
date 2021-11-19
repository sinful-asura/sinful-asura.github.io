#include "chessview.h"
#include <QTextStream>
#include <QPainter>
#include "chessdoc.h"
#include "chesseditor.h"
#include <QMouseEvent>
#include "chesssquaredialog.h"

ChessDoc* doc = new ChessDoc();
ChessSquareDialog* dlg;

ChessView::ChessView(QWidget *parent) : QWidget(parent)
{
    dlg = new ChessSquareDialog();
}

void ChessView::drawChessboard(QPainter *p){
    QColor black(163, 108, 88);
    QColor white(238, 208, 170);
    QPixmap figures(":/figures/canvas.png");

    // -1 so that border doesn't swallow the square, -25 to leave margin for letters
    int textSize = 25;
    int squareSize = (this->height() - textSize * 2 - 1)/8;
    //Space for rows
    int startPositionX = (this->width() - 8*squareSize - 1)/2;
    int startPositionY = (this->height() - 12 - 8*squareSize -1);

    p->setPen(QPen(Qt::black, 1));
        for(int i = 0; i< 8; i++){
            for(int j = 0; j < 8; j++){
                if(doc->grid[i][j].squareColor == 0){
                     p->setBrush(black);
                } else if (doc->grid[i][j].squareColor == 1){
                     p->setBrush(white);
                }
                p->drawRect(startPositionX + (i * squareSize),startPositionY - textSize + (j * squareSize),squareSize,squareSize);
            }
        }
        QFont font("Helvetica");
        int fontOffset = 5;
        font.setPointSize(textSize - fontOffset);
        p->setPen(Qt::white);
        p->setFont(font);
        for(int i = 0; i<8; i++){
            //Draw letter row
            QString character = "A";
            switch(i){
                case 0: character = "A"; break;
                case 1: character = "B"; break;
                case 2: character = "C"; break;
                case 3: character = "D"; break;
                case 4: character = "E"; break;
                case 5: character = "F"; break;
                case 6: character = "G"; break;
                case 7: character = "H"; break;
            }
            p->drawText(startPositionX + (i * squareSize) + textSize, (startPositionY - textSize) + 8*squareSize + fontOffset, textSize*2, textSize*2, 0, character);
        }
        for(int i = 0; i<8; i++){
            //Draw number columns
            QString character = "1";
            character = QString::number(8-i);
            p->drawText((startPositionX - textSize - fontOffset), startPositionY + (i * squareSize) - fontOffset, textSize*2, textSize*2, 0, character);
        }
        if(!doc->dataLoaded){
           return;
        }
        for(int j = 0; j<8; j++){
            for(int i = 0; i<8; i++){
                //Draw figures
                /**
                 * 0 - King
                 * 1 - Queeen
                 * 2 - Bishop
                 * 3 - Knight
                 * 4 - Rook
                 * 5 - Pawn
                 */
                /**
                *   0 - Black
                *   1 - White
                */
                if(doc->grid[i][j].isEmpty){
                    continue;
                }
                if(doc->grid[i][j].figureColor == 0){
                    //Black figures
                    switch(doc->grid[i][j].figureType){
                        case 0: p->drawPixmap(startPositionX + (j*squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 0,0,200,200); break; //King
                        case 1: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 200, 0, 200, 200); break; //Queen
                        case 2: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 400, 0, 200, 200); break; //Bishop
                        case 3: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 600, 0, 200, 200); break; //Knight
                        case 4: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 800, 0, 200, 200); break; //Rook
                        case 5: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 1000, 0, 200, 200); break; //Pawn
                    }
                } else{
                    //White figures
                    switch(doc->grid[i][j].figureType){
                        case 0: p->drawPixmap(startPositionX + (j*squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 0,200,200,200); break; //King
                        case 1: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 200, 200, 200, 200); break; //Queen
                        case 2: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 400, 200, 200, 200); break; //Bishop
                        case 3: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 600, 200, 200, 200); break; //Knight
                        case 4: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 800, 200, 200, 200); break; //Rook
                        case 5: p->drawPixmap(startPositionX + (j* squareSize), startPositionY - textSize + (i*squareSize), squareSize, squareSize, figures, 1000, 200, 200, 200); break; //Pawn
                    }
                }
            }
        }
}

void ChessView::paintEvent(QPaintEvent *e){
    QPainter p(this);
    drawChessboard(&p);
}

ChessView::~ChessView(){
    delete doc;
    delete dlg;
}

void ChessView::loadFile(QString path){
    doc->load(path);
    this->repaint();
}

void ChessView::saveFile(QString path){
    if(!path.contains(".txt")){
        path = path.trimmed() + ".txt";
    }
    doc->save(path);
}


void ChessView::mouseDoubleClickEvent(QMouseEvent *e){
    QPoint position = e->pos();
    int textSize = 25;
    int squareSize = (this->height() - textSize * 2 - 1)/8;
    //Space for rows
    int startPositionX = (this->width() - 8*squareSize - 1)/2;
    int startPositionY = (this->height() - 12 - 8*squareSize -1);
    int row = (position.x() - startPositionX)/squareSize; // row works good
    int col = (position.y() - startPositionY + textSize)/squareSize;
    if((row>=0) && (row <=7) && (col>=0) && (col<=7)){
            dlg->reset();
            if(dlg->exec() == dlg->Accepted){
                doc->dataLoaded = true;
                doc->grid[col][row].figureColor = dlg->figureColor;
                doc->grid[col][row].figureType = dlg->figureType;
                doc->grid[col][row].isEmpty = dlg->isEmpty;
                dlg->reset();
                this->repaint();
            }
    }
}
