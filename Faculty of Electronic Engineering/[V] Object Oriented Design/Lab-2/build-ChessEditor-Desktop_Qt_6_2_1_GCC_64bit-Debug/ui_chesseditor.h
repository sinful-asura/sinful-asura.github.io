/********************************************************************************
** Form generated from reading UI file 'chesseditor.ui'
**
** Created by: Qt User Interface Compiler version 6.2.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CHESSEDITOR_H
#define UI_CHESSEDITOR_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenu>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QStatusBar>
#include "chessview.h"

QT_BEGIN_NAMESPACE

class Ui_ChessEditor
{
public:
    QAction *actionOpen;
    QAction *actionSave;
    ChessView *centralwidget;
    QHBoxLayout *horizontalLayout;
    QMenuBar *menubar;
    QMenu *menuFILE;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *ChessEditor)
    {
        if (ChessEditor->objectName().isEmpty())
            ChessEditor->setObjectName(QString::fromUtf8("ChessEditor"));
        ChessEditor->resize(884, 609);
        actionOpen = new QAction(ChessEditor);
        actionOpen->setObjectName(QString::fromUtf8("actionOpen"));
        QIcon icon;
        icon.addFile(QString::fromUtf8(":/icons/open.png"), QSize(), QIcon::Normal, QIcon::Off);
        actionOpen->setIcon(icon);
        actionSave = new QAction(ChessEditor);
        actionSave->setObjectName(QString::fromUtf8("actionSave"));
        QIcon icon1;
        icon1.addFile(QString::fromUtf8(":/icons/save.png"), QSize(), QIcon::Normal, QIcon::Off);
        actionSave->setIcon(icon1);
        centralwidget = new ChessView(ChessEditor);
        centralwidget->setObjectName(QString::fromUtf8("centralwidget"));
        horizontalLayout = new QHBoxLayout(centralwidget);
        horizontalLayout->setObjectName(QString::fromUtf8("horizontalLayout"));
        ChessEditor->setCentralWidget(centralwidget);
        menubar = new QMenuBar(ChessEditor);
        menubar->setObjectName(QString::fromUtf8("menubar"));
        menubar->setGeometry(QRect(0, 0, 884, 23));
        menuFILE = new QMenu(menubar);
        menuFILE->setObjectName(QString::fromUtf8("menuFILE"));
        ChessEditor->setMenuBar(menubar);
        statusbar = new QStatusBar(ChessEditor);
        statusbar->setObjectName(QString::fromUtf8("statusbar"));
        ChessEditor->setStatusBar(statusbar);

        menubar->addAction(menuFILE->menuAction());
        menuFILE->addAction(actionOpen);
        menuFILE->addAction(actionSave);

        retranslateUi(ChessEditor);

        QMetaObject::connectSlotsByName(ChessEditor);
    } // setupUi

    void retranslateUi(QMainWindow *ChessEditor)
    {
        ChessEditor->setWindowTitle(QCoreApplication::translate("ChessEditor", "ChessEditor", nullptr));
        actionOpen->setText(QCoreApplication::translate("ChessEditor", "Open", nullptr));
        actionSave->setText(QCoreApplication::translate("ChessEditor", "Save", nullptr));
        menuFILE->setTitle(QCoreApplication::translate("ChessEditor", "FILE", nullptr));
    } // retranslateUi

};

namespace Ui {
    class ChessEditor: public Ui_ChessEditor {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CHESSEDITOR_H
