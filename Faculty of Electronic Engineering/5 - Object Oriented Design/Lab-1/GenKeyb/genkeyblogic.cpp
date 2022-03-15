#include "genkeyblogic.h"

QString currentDisplayText = "";
GenKeybLogic::GenKeybLogic(QObject *parent) : QObject(parent)
{

}

void GenKeybLogic::doCommand(QString character){
    currentDisplayText+=character;
    emit dispChanged(currentDisplayText);
}



