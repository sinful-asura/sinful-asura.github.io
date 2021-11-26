#ifndef CARDVIEW_H
#define CARDVIEW_H
#include <QMouseEvent>
#include <QKeyEvent>
#include <QPaintEvent>
#include <QWidget>
#include<QTimer>

class cardView : public QWidget
{
    Q_OBJECT
public:
    explicit cardView(QWidget *parent = nullptr);
    QTimer timer;
    ~cardView();
    void keyPressEvent(QKeyEvent *);
private:
    void drawCards(QPainter p, int i, int j);
    void clear();
    int cardCount;
protected:
    void paintEvent(QPaintEvent *);
private slots:
    void onCardTimer();
};

#endif // CARDVIEW_H
