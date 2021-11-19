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

signals:
    void loadTriggered(QString);
    void saveTriggered(QString);
    void doubleClick();
private slots:
    void on_actionOpen_triggered();
    void on_actionSave_triggered();
};
#endif // CHESSEDITOR_H
