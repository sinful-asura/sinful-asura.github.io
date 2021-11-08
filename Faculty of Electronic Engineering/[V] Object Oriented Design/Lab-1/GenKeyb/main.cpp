#include "genkeyb.h"

#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    GenKeyb w;
    w.show();
    return a.exec();
}
