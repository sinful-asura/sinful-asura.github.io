#include "chesseditor.h"
#include "ui_chesseditor.h"
#include "chesssquare.h"
#include "chessdoc.h"
#include <QTextStream>
#include <QFileDialog>

ChessEditor::ChessEditor(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::ChessEditor)
{
    ui->setupUi(this);
    connect(this, SIGNAL(loadTriggered(QString)), ui->chessView, SLOT(loadFile(QString)));
    connect(this, SIGNAL(saveTriggered(QString)), ui->chessView, SLOT(saveFile(QString)));
//    connect(this, SIGNAL(doubleClick()), ui->chessView, SLOT(onDoubleClick()));
}

ChessEditor::~ChessEditor()
{
    delete ui;
}

void ChessEditor::on_actionOpen_triggered()
{
    QString fname = QFileDialog::getOpenFileName(this, "Pick a file", QDir::currentPath(), "Text files (*.txt);;All files (*)");
    emit loadTriggered(fname);
}


void ChessEditor::on_actionSave_triggered()
{
    QString fname = QFileDialog::getSaveFileName(this, "Pick a save location", QDir::currentPath());
    emit saveTriggered(fname);
}

