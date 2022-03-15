#include "cardview.h"
#include<QPainter>
#include<QKeyEvent>

cardView::cardView(QWidget *parent) : QWidget(parent)
{
    QWidget::setFocus();
    connect(&timer, SIGNAL(timeout()), this, SLOT(onCardTimer()));
    cardCount = 0;

    timer.start(100);
}
void cardView::keyPressEvent(QKeyEvent *event)
{
    if (event->key() == Qt::Key_R) {
        timer.start(100);
        cardCount = 0;
    }
    repaint();
    QWidget::keyPressEvent(event);
}

void cardView::onCardTimer()
{
    if (cardCount == 13) {
        timer.stop();
        return;
    }
    cardCount++;
    repaint();
}

void cardView::paintEvent(QPaintEvent *)
{
    QPainter paint(this);
    paint.setBrush(QBrush(QColor(0,100,0)));
    paint.drawRect(0, 0, width(), height());

         for(int i=0;i<cardCount;i++){
             if(i<8){ drawCards(QPainter(this), i, i); }
             else{ drawCards(QPainter(this), i-13, i); }
         }
}

void cardView::drawCards(QPainter p, int i, int j)
{
    p.drawImage(QRect((width()/25*(13-j))+250, (height()/25*(j))+50, 73, 99), QImage((":/src/canvas.png")), QRect((73*5) + 73*(i), 197, 73, 98));
}

cardView::~cardView() {
    timer.stop();
    disconnect(&timer, nullptr, nullptr, nullptr);
}
