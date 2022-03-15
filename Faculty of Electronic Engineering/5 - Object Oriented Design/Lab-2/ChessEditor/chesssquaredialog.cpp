#include "chesssquaredialog.h"
#include "ui_chesssquaredialog.h"

//    bool isEmpty;
//    int figureType;
//    int figureColor;

ChessSquareDialog::ChessSquareDialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::ChessSquareDialog)
{
    ui->setupUi(this);
    reset();
    mirrorState();
}

ChessSquareDialog::~ChessSquareDialog()
{
    delete ui;
}

void ChessSquareDialog::on_comboBox_2_activated(int index)
{
    figureColor = index;
}


void ChessSquareDialog::on_comboBox_activated(int index)
{
    figureType = index;
}


void ChessSquareDialog::on_isEmptyCheckbox_stateChanged(int arg1)
{
    isEmpty = arg1;
}

void ChessSquareDialog::reset(){
    isEmpty = true;
    figureColor = -1;
    figureType = -1;
    mirrorState();
}

void ChessSquareDialog::mirrorState(){
    if(isEmpty){
        ui->isEmptyCheckbox->setCheckState(Qt::CheckState::Checked);
    } else{
        ui->isEmptyCheckbox->setCheckState(Qt::CheckState::Unchecked);
    }
    ui->comboBox->setCurrentIndex(figureType);
    ui->comboBox_2->setCurrentIndex(figureColor);
}
