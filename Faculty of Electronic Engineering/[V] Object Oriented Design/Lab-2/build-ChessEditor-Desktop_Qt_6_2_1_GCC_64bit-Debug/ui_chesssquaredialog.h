/********************************************************************************
** Form generated from reading UI file 'chesssquaredialog.ui'
**
** Created by: Qt User Interface Compiler version 6.2.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CHESSSQUAREDIALOG_H
#define UI_CHESSSQUAREDIALOG_H

#include <QtCore/QVariant>
#include <QtWidgets/QAbstractButton>
#include <QtWidgets/QApplication>
#include <QtWidgets/QCheckBox>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QDialog>
#include <QtWidgets/QDialogButtonBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QSpacerItem>
#include <QtWidgets/QVBoxLayout>

QT_BEGIN_NAMESPACE

class Ui_ChessSquareDialog
{
public:
    QVBoxLayout *verticalLayout;
    QVBoxLayout *selectionLayout;
    QCheckBox *isEmptyCheckbox;
    QHBoxLayout *colorLayout;
    QLabel *colorLabel;
    QComboBox *comboBox_2;
    QSpacerItem *horizontalSpacer;
    QHBoxLayout *typeLayout;
    QLabel *typeLabel;
    QComboBox *comboBox;
    QSpacerItem *horizontalSpacer_2;
    QDialogButtonBox *buttonBox;

    void setupUi(QDialog *ChessSquareDialog)
    {
        if (ChessSquareDialog->objectName().isEmpty())
            ChessSquareDialog->setObjectName(QString::fromUtf8("ChessSquareDialog"));
        ChessSquareDialog->resize(281, 188);
        verticalLayout = new QVBoxLayout(ChessSquareDialog);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        selectionLayout = new QVBoxLayout();
        selectionLayout->setObjectName(QString::fromUtf8("selectionLayout"));
        isEmptyCheckbox = new QCheckBox(ChessSquareDialog);
        isEmptyCheckbox->setObjectName(QString::fromUtf8("isEmptyCheckbox"));

        selectionLayout->addWidget(isEmptyCheckbox);

        colorLayout = new QHBoxLayout();
        colorLayout->setObjectName(QString::fromUtf8("colorLayout"));
        colorLabel = new QLabel(ChessSquareDialog);
        colorLabel->setObjectName(QString::fromUtf8("colorLabel"));

        colorLayout->addWidget(colorLabel);

        comboBox_2 = new QComboBox(ChessSquareDialog);
        comboBox_2->addItem(QString());
        comboBox_2->addItem(QString());
        comboBox_2->setObjectName(QString::fromUtf8("comboBox_2"));

        colorLayout->addWidget(comboBox_2);

        horizontalSpacer = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        colorLayout->addItem(horizontalSpacer);


        selectionLayout->addLayout(colorLayout);

        typeLayout = new QHBoxLayout();
        typeLayout->setObjectName(QString::fromUtf8("typeLayout"));
        typeLabel = new QLabel(ChessSquareDialog);
        typeLabel->setObjectName(QString::fromUtf8("typeLabel"));

        typeLayout->addWidget(typeLabel);

        comboBox = new QComboBox(ChessSquareDialog);
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->setObjectName(QString::fromUtf8("comboBox"));

        typeLayout->addWidget(comboBox);

        horizontalSpacer_2 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        typeLayout->addItem(horizontalSpacer_2);


        selectionLayout->addLayout(typeLayout);


        verticalLayout->addLayout(selectionLayout);

        buttonBox = new QDialogButtonBox(ChessSquareDialog);
        buttonBox->setObjectName(QString::fromUtf8("buttonBox"));
        buttonBox->setOrientation(Qt::Horizontal);
        buttonBox->setStandardButtons(QDialogButtonBox::Cancel|QDialogButtonBox::Ok);

        verticalLayout->addWidget(buttonBox);


        retranslateUi(ChessSquareDialog);
        QObject::connect(buttonBox, &QDialogButtonBox::accepted, ChessSquareDialog, qOverload<>(&QDialog::accept));
        QObject::connect(buttonBox, &QDialogButtonBox::rejected, ChessSquareDialog, qOverload<>(&QDialog::reject));

        QMetaObject::connectSlotsByName(ChessSquareDialog);
    } // setupUi

    void retranslateUi(QDialog *ChessSquareDialog)
    {
        ChessSquareDialog->setWindowTitle(QCoreApplication::translate("ChessSquareDialog", "Dialog", nullptr));
        isEmptyCheckbox->setText(QCoreApplication::translate("ChessSquareDialog", "Empty", nullptr));
        colorLabel->setText(QCoreApplication::translate("ChessSquareDialog", "Color", nullptr));
        comboBox_2->setItemText(0, QCoreApplication::translate("ChessSquareDialog", "Black", nullptr));
        comboBox_2->setItemText(1, QCoreApplication::translate("ChessSquareDialog", "White", nullptr));

        typeLabel->setText(QCoreApplication::translate("ChessSquareDialog", "Type", nullptr));
        comboBox->setItemText(0, QCoreApplication::translate("ChessSquareDialog", "King", nullptr));
        comboBox->setItemText(1, QCoreApplication::translate("ChessSquareDialog", "Queen", nullptr));
        comboBox->setItemText(2, QCoreApplication::translate("ChessSquareDialog", "Rook", nullptr));
        comboBox->setItemText(3, QCoreApplication::translate("ChessSquareDialog", "Bishop", nullptr));
        comboBox->setItemText(4, QCoreApplication::translate("ChessSquareDialog", "Knight", nullptr));
        comboBox->setItemText(5, QCoreApplication::translate("ChessSquareDialog", "Pawn", nullptr));

    } // retranslateUi

};

namespace Ui {
    class ChessSquareDialog: public Ui_ChessSquareDialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CHESSSQUAREDIALOG_H
