/****************************************************************************
** Meta object code from reading C++ file 'chesseditor.h'
**
** Created by: The Qt Meta Object Compiler version 68 (Qt 6.2.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include <memory>
#include "../ChessEditor/chesseditor.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'chesseditor.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 68
#error "This file was generated using the moc from 6.2.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_ChessEditor_t {
    const uint offsetsAndSize[14];
    char stringdata0[101];
};
#define QT_MOC_LITERAL(ofs, len) \
    uint(offsetof(qt_meta_stringdata_ChessEditor_t, stringdata0) + ofs), len 
static const qt_meta_stringdata_ChessEditor_t qt_meta_stringdata_ChessEditor = {
    {
QT_MOC_LITERAL(0, 11), // "ChessEditor"
QT_MOC_LITERAL(12, 13), // "loadTriggered"
QT_MOC_LITERAL(26, 0), // ""
QT_MOC_LITERAL(27, 13), // "saveTriggered"
QT_MOC_LITERAL(41, 11), // "doubleClick"
QT_MOC_LITERAL(53, 23), // "on_actionOpen_triggered"
QT_MOC_LITERAL(77, 23) // "on_actionSave_triggered"

    },
    "ChessEditor\0loadTriggered\0\0saveTriggered\0"
    "doubleClick\0on_actionOpen_triggered\0"
    "on_actionSave_triggered"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_ChessEditor[] = {

 // content:
      10,       // revision
       0,       // classname
       0,    0, // classinfo
       5,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       3,       // signalCount

 // signals: name, argc, parameters, tag, flags, initial metatype offsets
       1,    1,   44,    2, 0x06,    1 /* Public */,
       3,    1,   47,    2, 0x06,    3 /* Public */,
       4,    0,   50,    2, 0x06,    5 /* Public */,

 // slots: name, argc, parameters, tag, flags, initial metatype offsets
       5,    0,   51,    2, 0x08,    6 /* Private */,
       6,    0,   52,    2, 0x08,    7 /* Private */,

 // signals: parameters
    QMetaType::Void, QMetaType::QString,    2,
    QMetaType::Void, QMetaType::QString,    2,
    QMetaType::Void,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void,

       0        // eod
};

void ChessEditor::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<ChessEditor *>(_o);
        (void)_t;
        switch (_id) {
        case 0: _t->loadTriggered((*reinterpret_cast< QString(*)>(_a[1]))); break;
        case 1: _t->saveTriggered((*reinterpret_cast< QString(*)>(_a[1]))); break;
        case 2: _t->doubleClick(); break;
        case 3: _t->on_actionOpen_triggered(); break;
        case 4: _t->on_actionSave_triggered(); break;
        default: ;
        }
    } else if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        {
            using _t = void (ChessEditor::*)(QString );
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&ChessEditor::loadTriggered)) {
                *result = 0;
                return;
            }
        }
        {
            using _t = void (ChessEditor::*)(QString );
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&ChessEditor::saveTriggered)) {
                *result = 1;
                return;
            }
        }
        {
            using _t = void (ChessEditor::*)();
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&ChessEditor::doubleClick)) {
                *result = 2;
                return;
            }
        }
    }
}

const QMetaObject ChessEditor::staticMetaObject = { {
    QMetaObject::SuperData::link<QMainWindow::staticMetaObject>(),
    qt_meta_stringdata_ChessEditor.offsetsAndSize,
    qt_meta_data_ChessEditor,
    qt_static_metacall,
    nullptr,
qt_incomplete_metaTypeArray<qt_meta_stringdata_ChessEditor_t
, QtPrivate::TypeAndForceComplete<ChessEditor, std::true_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<QString, std::false_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<QString, std::false_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>
, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>


>,
    nullptr
} };


const QMetaObject *ChessEditor::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *ChessEditor::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_ChessEditor.stringdata0))
        return static_cast<void*>(this);
    return QMainWindow::qt_metacast(_clname);
}

int ChessEditor::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QMainWindow::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 5)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 5;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 5)
            *reinterpret_cast<QMetaType *>(_a[0]) = QMetaType();
        _id -= 5;
    }
    return _id;
}

// SIGNAL 0
void ChessEditor::loadTriggered(QString _t1)
{
    void *_a[] = { nullptr, const_cast<void*>(reinterpret_cast<const void*>(std::addressof(_t1))) };
    QMetaObject::activate(this, &staticMetaObject, 0, _a);
}

// SIGNAL 1
void ChessEditor::saveTriggered(QString _t1)
{
    void *_a[] = { nullptr, const_cast<void*>(reinterpret_cast<const void*>(std::addressof(_t1))) };
    QMetaObject::activate(this, &staticMetaObject, 1, _a);
}

// SIGNAL 2
void ChessEditor::doubleClick()
{
    QMetaObject::activate(this, &staticMetaObject, 2, nullptr);
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
