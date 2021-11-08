#ifndef GENKEYBLOGIC_H
#define GENKEYBLOGIC_H

#include <QObject>

class GenKeybLogic : public QObject
{
    Q_OBJECT
public:
    explicit GenKeybLogic(QObject *parent = nullptr);

signals:
//    void dispChanged(QString value);
//    void doCommand(QString character);
};

#endif // GENKEYBLOGIC_H
