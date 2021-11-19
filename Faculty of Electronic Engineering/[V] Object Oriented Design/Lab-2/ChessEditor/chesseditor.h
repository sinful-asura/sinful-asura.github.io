#ifndef CHESSEDITOR_H
#define CHESSEDITOR_H

#include <QMainWindow>

QT_BEGIN_NAMESPACE
namespace Ui { class ChessEditor; }
QT_END_NAMESPACE

class ChessEditor : public QMainWindow
{
    Q_OBJECT

public:
    ChessEditor(QWidget *parent = nullptr);
    ~ChessEditor();

private:
    Ui::ChessEditor *ui;
};
#endif // CHESSEDITOR_H
