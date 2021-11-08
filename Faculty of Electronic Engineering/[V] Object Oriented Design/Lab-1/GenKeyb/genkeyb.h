#ifndef GENKEYB_H
#define GENKEYB_H

#include <QWidget>

QT_BEGIN_NAMESPACE
namespace Ui { class GenKeyb; }
QT_END_NAMESPACE

class GenKeyb : public QWidget
{
    Q_OBJECT

public:
    GenKeyb(QWidget *parent = nullptr);
    ~GenKeyb();

private slots:

private:
    Ui::GenKeyb *ui;
};
#endif // GENKEYB_H
