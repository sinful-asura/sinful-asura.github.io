#include "cards.h"

#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    Cards w;
    w.show();
    return a.exec();
}
