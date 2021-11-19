#include "chesseditor.h"

#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    ChessEditor w;
    w.show();
    return a.exec();
}
