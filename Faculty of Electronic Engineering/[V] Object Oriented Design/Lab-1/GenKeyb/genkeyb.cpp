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

    // Connecting buttons signals to onBtnClicked slot for lazy people
    // I can't imagine myself connecting 500 buttons manually ;)
        for(int i = 0; i < ui->keyboard->count(); i++){
            QWidget* currentButton = ui->keyboard->itemAt(i)->widget();
            if(currentButton){
                connect(currentButton, SIGNAL(clicked()), this, SLOT(onBtnClicked()));
            } else{
                // Button doesn't exist, maybe show some kind of message if needed.
            }
        }

    // Connecting GenKeybLogic::dispChanged to GenKeyb::onDispChanged
    connect(keyLogic, SIGNAL(dispChanged(QString)), this, SLOT(onDispChanged(QString)));
}

GenKeyb::~GenKeyb()
{
    delete ui;
    delete keyLogic;
}


void GenKeyb::onBtnClicked()
{
    // Cast sender to QPushButton in order to access the button's text
    QPushButton* btn = (QPushButton*) sender();
    keyLogic->doCommand(btn->text());

    /**
     * Alternative could have been to pass the text of the button with clicked(QString), if possible,
     * so that we don't have to cast the button but instead get a text as class parameter.
     */
}

void GenKeyb::onDispChanged(QString newValue){
    ui->display->setText(newValue);
}
