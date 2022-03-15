#ifndef CARDS_H
#define CARDS_H

#include <QMainWindow>
#include<QKeyEvent>

QT_BEGIN_NAMESPACE
namespace Ui { class Cards; }
QT_END_NAMESPACE

class Cards : public QMainWindow
{
    Q_OBJECT

public:
    Cards(QWidget *parent = nullptr);
    ~Cards();

private:
    Ui::Cards *ui;
};
#endif // CARDS_H
