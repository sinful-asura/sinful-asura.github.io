#ifndef CHESSDOC_H
#define CHESSDOC_H

#include <QObject>
#include "chesssquare.h"

class ChessDoc : public QObject
{
    Q_OBJECT
public:
    explicit ChessDoc(QObject *parent = nullptr);
    ~ChessDoc();
    void load(QString);
    void save(QString);
    ChessSquare** grid;

signals:
    void chessDataChanged();
};

#endif // CHESSDOC_H
