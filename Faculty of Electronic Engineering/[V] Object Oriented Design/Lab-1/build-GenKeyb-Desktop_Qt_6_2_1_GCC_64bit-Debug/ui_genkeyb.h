/********************************************************************************
** Form generated from reading UI file 'genkeyb.ui'
**
** Created by: Qt User Interface Compiler version 6.2.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_GENKEYB_H
#define UI_GENKEYB_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QTextEdit>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_GenKeyb
{
public:
    QVBoxLayout *verticalLayout;
    QTextEdit *display;
    QGridLayout *keyboard;
    QPushButton *nineBtn;
    QPushButton *oneBtn;
    QPushButton *aBtn;
    QPushButton *eightBtn;
    QPushButton *percentBtn;
    QPushButton *upArrowBtn;
    QPushButton *fiveBtn;
    QPushButton *hashBtn;
    QPushButton *leftArrowBtn;
    QPushButton *twoBtn;
    QPushButton *dotBtn;

    void setupUi(QWidget *GenKeyb)
    {
        if (GenKeyb->objectName().isEmpty())
            GenKeyb->setObjectName(QString::fromUtf8("GenKeyb"));
        GenKeyb->resize(350, 350);
        QSizePolicy sizePolicy(QSizePolicy::MinimumExpanding, QSizePolicy::MinimumExpanding);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(GenKeyb->sizePolicy().hasHeightForWidth());
        GenKeyb->setSizePolicy(sizePolicy);
        GenKeyb->setMinimumSize(QSize(350, 350));
        verticalLayout = new QVBoxLayout(GenKeyb);
        verticalLayout->setSpacing(0);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        verticalLayout->setContentsMargins(0, 0, 0, 0);
        display = new QTextEdit(GenKeyb);
        display->setObjectName(QString::fromUtf8("display"));
        display->setEnabled(true);
        sizePolicy.setHeightForWidth(display->sizePolicy().hasHeightForWidth());
        display->setSizePolicy(sizePolicy);
        display->setMinimumSize(QSize(150, 150));
        display->viewport()->setProperty("cursor", QVariant(QCursor(Qt::IBeamCursor)));

        verticalLayout->addWidget(display);

        keyboard = new QGridLayout();
        keyboard->setSpacing(0);
        keyboard->setObjectName(QString::fromUtf8("keyboard"));
        keyboard->setSizeConstraint(QLayout::SetDefaultConstraint);
        keyboard->setContentsMargins(-1, -1, -1, 0);
        nineBtn = new QPushButton(GenKeyb);
        nineBtn->setObjectName(QString::fromUtf8("nineBtn"));
        sizePolicy.setHeightForWidth(nineBtn->sizePolicy().hasHeightForWidth());
        nineBtn->setSizePolicy(sizePolicy);
        nineBtn->setMinimumSize(QSize(50, 50));
        nineBtn->setCursor(QCursor(Qt::PointingHandCursor));
        nineBtn->setStyleSheet(QString::fromUtf8("background-color: #00aa00;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(nineBtn, 1, 5, 1, 1);

        oneBtn = new QPushButton(GenKeyb);
        oneBtn->setObjectName(QString::fromUtf8("oneBtn"));
        sizePolicy.setHeightForWidth(oneBtn->sizePolicy().hasHeightForWidth());
        oneBtn->setSizePolicy(sizePolicy);
        oneBtn->setMinimumSize(QSize(50, 150));
        oneBtn->setCursor(QCursor(Qt::PointingHandCursor));
        oneBtn->setStyleSheet(QString::fromUtf8("background-color: #ff7700;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(oneBtn, 0, 3, 3, 1);

        aBtn = new QPushButton(GenKeyb);
        aBtn->setObjectName(QString::fromUtf8("aBtn"));
        sizePolicy.setHeightForWidth(aBtn->sizePolicy().hasHeightForWidth());
        aBtn->setSizePolicy(sizePolicy);
        aBtn->setMinimumSize(QSize(50, 100));
        aBtn->setCursor(QCursor(Qt::PointingHandCursor));
        aBtn->setStyleSheet(QString::fromUtf8("background-color: #0000ff;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(aBtn, 0, 2, 2, 1);

        eightBtn = new QPushButton(GenKeyb);
        eightBtn->setObjectName(QString::fromUtf8("eightBtn"));
        sizePolicy.setHeightForWidth(eightBtn->sizePolicy().hasHeightForWidth());
        eightBtn->setSizePolicy(sizePolicy);
        eightBtn->setMinimumSize(QSize(50, 150));
        eightBtn->setCursor(QCursor(Qt::PointingHandCursor));
        eightBtn->setStyleSheet(QString::fromUtf8("background-color: #ff0000;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));
        eightBtn->setCheckable(false);

        keyboard->addWidget(eightBtn, 0, 4, 3, 1);

        percentBtn = new QPushButton(GenKeyb);
        percentBtn->setObjectName(QString::fromUtf8("percentBtn"));
        sizePolicy.setHeightForWidth(percentBtn->sizePolicy().hasHeightForWidth());
        percentBtn->setSizePolicy(sizePolicy);
        percentBtn->setMinimumSize(QSize(50, 100));
        percentBtn->setBaseSize(QSize(50, 100));
        percentBtn->setCursor(QCursor(Qt::PointingHandCursor));
        percentBtn->setLayoutDirection(Qt::LeftToRight);
        percentBtn->setStyleSheet(QString::fromUtf8("background-color: #0077ff;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(percentBtn, 0, 0, 2, 1);

        upArrowBtn = new QPushButton(GenKeyb);
        upArrowBtn->setObjectName(QString::fromUtf8("upArrowBtn"));
        sizePolicy.setHeightForWidth(upArrowBtn->sizePolicy().hasHeightForWidth());
        upArrowBtn->setSizePolicy(sizePolicy);
        upArrowBtn->setMinimumSize(QSize(50, 50));
        upArrowBtn->setCursor(QCursor(Qt::PointingHandCursor));
        upArrowBtn->setStyleSheet(QString::fromUtf8("background-color: #ff00ff;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(upArrowBtn, 0, 5, 1, 1);

        fiveBtn = new QPushButton(GenKeyb);
        fiveBtn->setObjectName(QString::fromUtf8("fiveBtn"));
        sizePolicy.setHeightForWidth(fiveBtn->sizePolicy().hasHeightForWidth());
        fiveBtn->setSizePolicy(sizePolicy);
        fiveBtn->setMinimumSize(QSize(50, 50));
        fiveBtn->setSizeIncrement(QSize(0, 0));
        fiveBtn->setCursor(QCursor(Qt::PointingHandCursor));
        fiveBtn->setStyleSheet(QString::fromUtf8("background-color: #00aa00;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(fiveBtn, 0, 1, 1, 1);

        hashBtn = new QPushButton(GenKeyb);
        hashBtn->setObjectName(QString::fromUtf8("hashBtn"));
        sizePolicy.setHeightForWidth(hashBtn->sizePolicy().hasHeightForWidth());
        hashBtn->setSizePolicy(sizePolicy);
        hashBtn->setMinimumSize(QSize(100, 50));
        hashBtn->setCursor(QCursor(Qt::PointingHandCursor));
        hashBtn->setStyleSheet(QString::fromUtf8("background-color: #0000ff;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(hashBtn, 2, 0, 1, 2);

        leftArrowBtn = new QPushButton(GenKeyb);
        leftArrowBtn->setObjectName(QString::fromUtf8("leftArrowBtn"));
        sizePolicy.setHeightForWidth(leftArrowBtn->sizePolicy().hasHeightForWidth());
        leftArrowBtn->setSizePolicy(sizePolicy);
        leftArrowBtn->setMinimumSize(QSize(50, 50));
        leftArrowBtn->setCursor(QCursor(Qt::PointingHandCursor));
        leftArrowBtn->setStyleSheet(QString::fromUtf8("background-color: #ff7700;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(leftArrowBtn, 2, 2, 1, 1);

        twoBtn = new QPushButton(GenKeyb);
        twoBtn->setObjectName(QString::fromUtf8("twoBtn"));
        sizePolicy.setHeightForWidth(twoBtn->sizePolicy().hasHeightForWidth());
        twoBtn->setSizePolicy(sizePolicy);
        twoBtn->setMinimumSize(QSize(50, 50));
        twoBtn->setCursor(QCursor(Qt::PointingHandCursor));
        twoBtn->setStyleSheet(QString::fromUtf8("background-color: #ff0000;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));

        keyboard->addWidget(twoBtn, 2, 5, 1, 1);

        dotBtn = new QPushButton(GenKeyb);
        dotBtn->setObjectName(QString::fromUtf8("dotBtn"));
        sizePolicy.setHeightForWidth(dotBtn->sizePolicy().hasHeightForWidth());
        dotBtn->setSizePolicy(sizePolicy);
        dotBtn->setMinimumSize(QSize(50, 50));
        dotBtn->setCursor(QCursor(Qt::PointingHandCursor));
        dotBtn->setStyleSheet(QString::fromUtf8("background-color: #0077ff;\n"
"border: 1px solid black;\n"
"border-radius: 4px;\n"
"font-size: 20px;"));
        dotBtn->setAutoDefault(false);
        dotBtn->setFlat(false);

        keyboard->addWidget(dotBtn, 1, 1, 1, 1);

        keyboard->setRowStretch(0, 1);
        keyboard->setRowStretch(1, 1);
        keyboard->setRowStretch(2, 1);
        keyboard->setColumnStretch(0, 1);
        keyboard->setColumnStretch(1, 1);
        keyboard->setColumnStretch(2, 1);
        keyboard->setColumnStretch(3, 1);
        keyboard->setColumnStretch(4, 1);
        keyboard->setColumnStretch(5, 1);

        verticalLayout->addLayout(keyboard);

        verticalLayout->setStretch(0, 1);
        verticalLayout->setStretch(1, 1);

        retranslateUi(GenKeyb);

        dotBtn->setDefault(false);


        QMetaObject::connectSlotsByName(GenKeyb);
    } // setupUi

    void retranslateUi(QWidget *GenKeyb)
    {
        GenKeyb->setWindowTitle(QCoreApplication::translate("GenKeyb", "GenKeyb", nullptr));
        display->setHtml(QCoreApplication::translate("GenKeyb", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:'Noto Sans'; font-size:10pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>", nullptr));
        nineBtn->setText(QCoreApplication::translate("GenKeyb", "9", nullptr));
        oneBtn->setText(QCoreApplication::translate("GenKeyb", "1", nullptr));
        aBtn->setText(QCoreApplication::translate("GenKeyb", "A", nullptr));
        eightBtn->setText(QCoreApplication::translate("GenKeyb", "8", nullptr));
        percentBtn->setText(QCoreApplication::translate("GenKeyb", "%", nullptr));
        upArrowBtn->setText(QCoreApplication::translate("GenKeyb", "\342\206\221", nullptr));
        fiveBtn->setText(QCoreApplication::translate("GenKeyb", "5", nullptr));
        hashBtn->setText(QCoreApplication::translate("GenKeyb", "#", nullptr));
        leftArrowBtn->setText(QCoreApplication::translate("GenKeyb", "\342\206\220", nullptr));
        twoBtn->setText(QCoreApplication::translate("GenKeyb", "2", nullptr));
        dotBtn->setText(QCoreApplication::translate("GenKeyb", ".", nullptr));
    } // retranslateUi

};

namespace Ui {
    class GenKeyb: public Ui_GenKeyb {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_GENKEYB_H
