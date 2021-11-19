#ifndef CHESSSQUAREDIALOG_H
#define CHESSSQUAREDIALOG_H

#include <QDialog>

namespace Ui {
class ChessSquareDialog;
}

class ChessSquareDialog : public QDialog
{
    Q_OBJECT

public:
    explicit ChessSquareDialog(QWidget *parent = nullptr);
    ~ChessSquareDialog();
    bool isEmpty;
    int figureType;
    int figureColor;
    void reset();
private:
    void mirrorState();

signals:
    void dialogDataChanged();

private slots:
    void on_comboBox_2_activated(int index);

    void on_comboBox_activated(int index);

    void on_isEmptyCheckbox_stateChanged(int arg1);

private:
    Ui::ChessSquareDialog *ui;
};

#endif // CHESSSQUAREDIALOG_H
