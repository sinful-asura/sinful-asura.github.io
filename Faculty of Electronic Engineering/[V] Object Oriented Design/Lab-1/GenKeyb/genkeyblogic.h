#ifndef GENKEYBLOGIC_H
#define GENKEYBLOGIC_H

#include <QObject>

class GenKeybLogic : public QObject
{
    Q_OBJECT
public:
    explicit GenKeybLogic(QObject *parent = nullptr);

signals:
    void dispChanged(QString);

public slots:
    void doCommand(QString);
};

#endif // GENKEYBLOGIC_H
