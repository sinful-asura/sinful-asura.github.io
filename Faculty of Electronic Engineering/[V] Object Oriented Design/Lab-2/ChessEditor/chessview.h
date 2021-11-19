#ifndef CHESSVIEW_H
#define CHESSVIEW_H

#include <QWidget>

class ChessView : public QWidget
{
    Q_OBJECT
public:
    explicit ChessView(QWidget *parent = nullptr);
    ~ChessView();
    void drawChessboard(QPainter*);
    void paintEvent(QPaintEvent *event);
signals:
    void doubleClicked();

public slots:
    void loadFile(QString);
    void saveFile(QString);
protected:
    void mouseDoubleClickEvent(QMouseEvent *);
};

#endif // CHESSVIEW_H
