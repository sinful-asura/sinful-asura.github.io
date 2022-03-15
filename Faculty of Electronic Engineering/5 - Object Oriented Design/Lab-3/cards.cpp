#include "cards.h"
#include "ui_cards.h"
#include<QPainter>

Cards::Cards(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::Cards)
{
    ui->setupUi(this);
}

Cards::~Cards()
{
    delete ui;
}

