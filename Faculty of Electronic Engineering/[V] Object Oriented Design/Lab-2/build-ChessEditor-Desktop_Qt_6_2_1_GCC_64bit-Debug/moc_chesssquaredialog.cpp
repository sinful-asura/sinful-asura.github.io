/****************************************************************************
** Meta object code from reading C++ file 'chesssquaredialog.h'
**
** Created by: The Qt Meta Object Compiler version 68 (Qt 6.2.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include <memory>
#include "../ChessEditor/chesssquaredialog.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'chesssquaredialog.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 68
#error "This file was generated using the moc from 6.2.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_ChessSquareDialog_t {
    const uint offsetsAndSize[16];
    char stringdata0[126];
};
#define QT_MOC_LITERAL(ofs, len) \
    uint(offsetof(qt_meta_stringdata_ChessSquareDialog_t, stringdata0) + ofs), len 
static const qt_meta_stringdata_ChessSquareDialog_t qt_meta_stringdata_ChessSquareDialog = {
    {
QT_MOC_LITERAL(0, 17), // "ChessSquareDialog"
QT_MOC_LITERAL(18, 17), // "dialogDataChanged"
QT_MOC_LITERAL(36, 0), // ""
QT_MOC_LITERAL(37, 23), // "on_comboBox_2_activated"
QT_MOC_LITERAL(61, 5), // "index"
QT_MOC_LITERAL(67, 21), // "on_comboBox_activated"
QT_MOC_LITERAL(89, 31), // "on_isEmptyCheckbox_stateChanged"
QT_MOC_LITERAL(121, 4) // "arg1"

    },
    "ChessSquareDialog\0dialogDataChanged\0"
    "\0on_comboBox_2_activated\0index\0"
    "on_comboBox_activated\0"
    "on_isEmptyCheckbox_stateChanged\0arg1"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_ChessSquareDialog[] = {

 // content:
      10,       // revision
       0,       // classname
       0,    0, // classinfo
       4,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       1,       // signalCount

 // signals: name, argc, parameters, tag, flags, initial metatype offsets
       1,    0,   38,    2, 0x06,    1 /* Public */,

 // slots: name, argc, parameters, tag, flags, initial metatype offsets
       3,    1,   39,    2, 0x08,    2 /* Private */,
       5,    1,   42,    2, 0x08,    4 /* Private */,
       6,    1,   45,    2, 0x08,    6 /* Private */,

 // signals: parameters
    QMetaType::Void,

 // slots: parameters
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void, QMetaType::Int,    7,

       0        // eod
};

void ChessSquareDialog::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<ChessSquareDialog *>(_o);
        (void)_t;
        switch (_id) {
        case 0: _t->dialogDataChanged(); break;
        case 1: _t->on_comboBox_2_activated((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 2: _t->on_comboBox_activated((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 3: _t->on_isEmptyCheckbox_stateChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        default: ;
        }
    } else if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        {
            using _t = void (ChessSquareDialog::*)();
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&ChessSquareDialog::dialogDataChanged)) {
                *result = 0;
                return;
            }
        }
    }
}

const QMetaObject ChessSquareDialog::staticMetaObject = { {
    QMetaObject::SuperData::link<QDialog::staticMetaObject>(),
    qt_meta_stringdata_ChessSquareDialog.offsetsAndSize,
    qt_meta_data_ChessSquareDialog,
    qt_static_metacall,
    nullptr,
qt_incomplete_metaTypeArray<qt_meta_stringdata_ChessSquareDialog_t
, QtPrivate::TypeAndForceComplete<ChessSquareDialog, std::true_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>
, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<int, std::false_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<int, std::false_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<int, std::false_type>


>,
    nullptr
} };


const QMetaObject *ChessSquareDialog::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *ChessSquareDialog::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_ChessSquareDialog.stringdata0))
        return static_cast<void*>(this);
    return QDialog::qt_metacast(_clname);
}

int ChessSquareDialog::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QDialog::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 4)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 4;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 4)
            *reinterpret_cast<QMetaType *>(_a[0]) = QMetaType();
        _id -= 4;
    }
    return _id;
}

// SIGNAL 0
void ChessSquareDialog::dialogDataChanged()
{
    QMetaObject::activate(this, &staticMetaObject, 0, nullptr);
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
