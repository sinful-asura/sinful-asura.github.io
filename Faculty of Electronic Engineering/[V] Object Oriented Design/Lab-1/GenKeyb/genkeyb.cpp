#include "genkeyb.h"
#include "ui_genkeyb.h"
#include "genkeyblogic.h"

GenKeybLogic* keyLogic;

GenKeyb::GenKeyb(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::GenKeyb)
{
    ui->setupUi(this);
    keyLogic = new GenKeybLogic(parent);
}

GenKeyb::~GenKeyb()
{
    delete ui;
    delete keyLogic;
}

