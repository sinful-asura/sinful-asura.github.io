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
}

ChessEditor::~ChessEditor()
{
    delete ui;
}

void ChessEditor::on_actionOpen_triggered()
{
    QString fname = QFileDialog::getSaveFileName(this, this->windowTitle(), QDir::currentPath(), "Text Files (.txt);;All Files (.*)");
}

