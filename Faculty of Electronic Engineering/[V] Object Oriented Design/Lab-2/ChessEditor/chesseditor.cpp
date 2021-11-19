#include "chesseditor.h"
#include "ui_chesseditor.h"
#include "chesssquare.h"
#include "chessdoc.h"
#include <QTextStream>

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

