import sys
import json
import random
import re
from pathlib import Path
from PyQt5.QtWidgets import (QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
                             QLabel, QPushButton, QFileDialog, QMessageBox, QTabWidget,
                             QFrame, QScrollArea, QInputDialog, QCheckBox, QLineEdit,
                             QGridLayout, QSizePolicy, QRadioButton, QButtonGroup, QColorDialog,
                             QProgressBar, QComboBox)
from PyQt5.QtGui import QPixmap, QFont, QColor, QDrag, QPainter, QPen, QBrush, QImage
from PyQt5.QtCore import Qt, QMimeData, QPoint, pyqtSignal, QSize, QRect, QTimer


def clear_layout(layout):
    """Safely clear all items from a layout."""
    while layout.count():
        item = layout.takeAt(0)
        w = item.widget()
        if w is not None:
            w.setParent(None)
            w.deleteLater()
        elif item.layout() is not None:
            clear_layout(item.layout())


# ──────────────────────────────────────────────────────────────
# GAME DATA
# ──────────────────────────────────────────────────────────────
VERB_CONJUGATIONS = {
    "hablar":    {"yo": "hablo",    "tú": "hablas",   "él/ella": "habla",    "nosotros": "hablamos",  "vosotros": "habláis",  "ellos/ellas": "hablan"},
    "comer":     {"yo": "como",     "tú": "comes",    "él/ella": "come",     "nosotros": "comemos",   "vosotros": "coméis",   "ellos/ellas": "comen"},
    "vivir":     {"yo": "vivo",     "tú": "vives",    "él/ella": "vive",     "nosotros": "vivimos",   "vosotros": "vivís",    "ellos/ellas": "viven"},
    "ser":       {"yo": "soy",      "tú": "eres",     "él/ella": "es",       "nosotros": "somos",     "vosotros": "sois",     "ellos/ellas": "son"},
    "estar":     {"yo": "estoy",    "tú": "estás",    "él/ella": "está",     "nosotros": "estamos",   "vosotros": "estáis",   "ellos/ellas": "están"},
    "tener":     {"yo": "tengo",    "tú": "tienes",   "él/ella": "tiene",    "nosotros": "tenemos",   "vosotros": "tenéis",   "ellos/ellas": "tienen"},
    "ir":        {"yo": "voy",      "tú": "vas",      "él/ella": "va",       "nosotros": "vamos",     "vosotros": "vais",     "ellos/ellas": "van"},
    "hacer":     {"yo": "hago",     "tú": "haces",    "él/ella": "hace",     "nosotros": "hacemos",   "vosotros": "hacéis",   "ellos/ellas": "hacen"},
    "poder":     {"yo": "puedo",    "tú": "puedes",   "él/ella": "puede",    "nosotros": "podemos",   "vosotros": "podéis",   "ellos/ellas": "pueden"},
    "querer":    {"yo": "quiero",   "tú": "quieres",  "él/ella": "quiere",   "nosotros": "queremos",  "vosotros": "queréis",  "ellos/ellas": "quieren"},
    "decir":     {"yo": "digo",     "tú": "dices",    "él/ella": "dice",     "nosotros": "decimos",   "vosotros": "decís",    "ellos/ellas": "dicen"},
    "ver":       {"yo": "veo",      "tú": "ves",      "él/ella": "ve",       "nosotros": "vemos",     "vosotros": "veis",     "ellos/ellas": "ven"},
    "dar":       {"yo": "doy",      "tú": "das",      "él/ella": "da",       "nosotros": "damos",     "vosotros": "dais",     "ellos/ellas": "dan"},
    "saber":     {"yo": "sé",       "tú": "sabes",    "él/ella": "sabe",     "nosotros": "sabemos",   "vosotros": "sabéis",   "ellos/ellas": "saben"},
    "venir":     {"yo": "vengo",    "tú": "vienes",   "él/ella": "viene",    "nosotros": "venimos",   "vosotros": "venís",    "ellos/ellas": "vienen"},
    "poner":     {"yo": "pongo",    "tú": "pones",    "él/ella": "pone",     "nosotros": "ponemos",   "vosotros": "ponéis",   "ellos/ellas": "ponen"},
    "salir":     {"yo": "salgo",    "tú": "sales",    "él/ella": "sale",     "nosotros": "salimos",   "vosotros": "salís",    "ellos/ellas": "salen"},
    "escribir":  {"yo": "escribo",  "tú": "escribes", "él/ella": "escribe",  "nosotros": "escribimos","vosotros": "escribís", "ellos/ellas": "escriben"},
    "leer":      {"yo": "leo",      "tú": "lees",     "él/ella": "lee",      "nosotros": "leemos",    "vosotros": "leéis",    "ellos/ellas": "leen"},
    "beber":     {"yo": "bebo",     "tú": "bebes",    "él/ella": "bebe",     "nosotros": "bebemos",   "vosotros": "bebéis",   "ellos/ellas": "beben"},
    "abrir":     {"yo": "abro",     "tú": "abres",    "él/ella": "abre",     "nosotros": "abrimos",   "vosotros": "abrís",    "ellos/ellas": "abren"},
    "dormir":    {"yo": "duermo",   "tú": "duermes",  "él/ella": "duerme",   "nosotros": "dormimos",  "vosotros": "dormís",   "ellos/ellas": "duermen"},
    "jugar":     {"yo": "juego",    "tú": "juegas",   "él/ella": "juega",    "nosotros": "jugamos",   "vosotros": "jugáis",   "ellos/ellas": "juegan"},
    "estudiar":  {"yo": "estudio",  "tú": "estudias", "él/ella": "estudia",  "nosotros": "estudiamos","vosotros": "estudiáis","ellos/ellas": "estudian"},
    "trabajar":  {"yo": "trabajo",  "tú": "trabajas", "él/ella": "trabaja",  "nosotros": "trabajamos","vosotros": "trabajáis","ellos/ellas": "trabajan"},
    "pensar":    {"yo": "pienso",   "tú": "piensas",  "él/ella": "piensa",   "nosotros": "pensamos",  "vosotros": "pensáis",  "ellos/ellas": "piensan"},
    "llevar":    {"yo": "llevo",    "tú": "llevas",   "él/ella": "lleva",    "nosotros": "llevamos",  "vosotros": "lleváis",  "ellos/ellas": "llevan"},
    "llegar":    {"yo": "llego",    "tú": "llegas",   "él/ella": "llega",    "nosotros": "llegamos",  "vosotros": "llegáis",  "ellos/ellas": "llegan"},
    "pasar":     {"yo": "paso",     "tú": "pasas",    "él/ella": "pasa",     "nosotros": "pasamos",   "vosotros": "pasáis",   "ellos/ellas": "pasan"},
    "deber":     {"yo": "debo",     "tú": "debes",    "él/ella": "debe",     "nosotros": "debemos",   "vosotros": "debéis",   "ellos/ellas": "deben"},
    "caminar":   {"yo": "camino",   "tú": "caminas",  "él/ella": "camina",   "nosotros": "caminamos", "vosotros": "camináis", "ellos/ellas": "caminan"},
    "correr":    {"yo": "corro",    "tú": "corres",   "él/ella": "corre",    "nosotros": "corremos",  "vosotros": "corréis",  "ellos/ellas": "corren"},
    "escuchar":  {"yo": "escucho",  "tú": "escuchas", "él/ella": "escucha",  "nosotros": "escuchamos","vosotros": "escucháis","ellos/ellas": "escuchan"},
    "mirar":     {"yo": "miro",     "tú": "miras",    "él/ella": "mira",     "nosotros": "miramos",   "vosotros": "miráis",   "ellos/ellas": "miran"},
    "necesitar": {"yo": "necesito", "tú": "necesitas","él/ella": "necesita", "nosotros": "necesitamos","vosotros": "necesitáis","ellos/ellas": "necesitan"},
    "usar":      {"yo": "uso",      "tú": "usas",     "él/ella": "usa",      "nosotros": "usamos",    "vosotros": "usáis",    "ellos/ellas": "usan"},
    "comprar":   {"yo": "compro",   "tú": "compras",  "él/ella": "compra",   "nosotros": "compramos", "vosotros": "compráis", "ellos/ellas": "compran"},
    "volver":    {"yo": "vuelvo",   "tú": "vuelves",  "él/ella": "vuelve",   "nosotros": "volvemos",  "vosotros": "volvéis",  "ellos/ellas": "vuelven"},
    "encontrar": {"yo": "encuentro","tú": "encuentras","él/ella": "encuentra","nosotros": "encontramos","vosotros": "encontráis","ellos/ellas": "encuentran"},
    "esperar":   {"yo": "espero",   "tú": "esperas",  "él/ella": "espera",   "nosotros": "esperamos", "vosotros": "esperáis", "ellos/ellas": "esperan"},
    "entrar":    {"yo": "entro",    "tú": "entras",   "él/ella": "entra",    "nosotros": "entramos",  "vosotros": "entráis",  "ellos/ellas": "entran"},
    "cerrar":    {"yo": "cierro",   "tú": "cierras",  "él/ella": "cierra",   "nosotros": "cerramos",  "vosotros": "cerráis",  "ellos/ellas": "cierran"},
    "empezar":   {"yo": "empiezo",  "tú": "empiezas", "él/ella": "empieza",  "nosotros": "empezamos", "vosotros": "empezáis", "ellos/ellas": "empiezan"},
    "preguntar": {"yo": "pregunto", "tú": "preguntas","él/ella": "pregunta", "nosotros": "preguntamos","vosotros": "preguntáis","ellos/ellas": "preguntan"},
    "ayudar":    {"yo": "ayudo",    "tú": "ayudas",   "él/ella": "ayuda",    "nosotros": "ayudamos",  "vosotros": "ayudáis",  "ellos/ellas": "ayudan"},
    "llamar":    {"yo": "llamo",    "tú": "llamas",   "él/ella": "llama",    "nosotros": "llamamos",  "vosotros": "llamáis",  "ellos/ellas": "llaman"},
    "tomar":     {"yo": "tomo",     "tú": "tomas",    "él/ella": "toma",     "nosotros": "tomamos",   "vosotros": "tomáis",   "ellos/ellas": "toman"},
    "seguir":    {"yo": "sigo",     "tú": "sigues",   "él/ella": "sigue",    "nosotros": "seguimos",  "vosotros": "seguís",   "ellos/ellas": "siguen"},
    "conocer":   {"yo": "conozco",  "tú": "conoces",  "él/ella": "conoce",   "nosotros": "conocemos", "vosotros": "conocéis", "ellos/ellas": "conocen"},
    "sentir":    {"yo": "siento",   "tú": "sientes",  "él/ella": "siente",   "nosotros": "sentimos",  "vosotros": "sentís",   "ellos/ellas": "sienten"},
}

VERB_CONJ_INDEFINIDO = {
    "hablar":    {"yo": "hablé",      "tú": "hablaste",    "él/ella": "habló",      "nosotros": "hablamos",     "vosotros": "hablasteis",   "ellos/ellas": "hablaron"},
    "comer":     {"yo": "comí",       "tú": "comiste",     "él/ella": "comió",      "nosotros": "comimos",      "vosotros": "comisteis",    "ellos/ellas": "comieron"},
    "vivir":     {"yo": "viví",       "tú": "viviste",     "él/ella": "vivió",      "nosotros": "vivimos",      "vosotros": "vivisteis",    "ellos/ellas": "vivieron"},
    "ser":       {"yo": "fui",        "tú": "fuiste",      "él/ella": "fue",        "nosotros": "fuimos",       "vosotros": "fuisteis",     "ellos/ellas": "fueron"},
    "estar":     {"yo": "estuve",     "tú": "estuviste",   "él/ella": "estuvo",     "nosotros": "estuvimos",    "vosotros": "estuvisteis",  "ellos/ellas": "estuvieron"},
    "tener":     {"yo": "tuve",       "tú": "tuviste",     "él/ella": "tuvo",       "nosotros": "tuvimos",      "vosotros": "tuvisteis",    "ellos/ellas": "tuvieron"},
    "ir":        {"yo": "fui",        "tú": "fuiste",      "él/ella": "fue",        "nosotros": "fuimos",       "vosotros": "fuisteis",     "ellos/ellas": "fueron"},
    "hacer":     {"yo": "hice",       "tú": "hiciste",     "él/ella": "hizo",       "nosotros": "hicimos",      "vosotros": "hicisteis",    "ellos/ellas": "hicieron"},
    "poder":     {"yo": "pude",       "tú": "pudiste",     "él/ella": "pudo",       "nosotros": "pudimos",      "vosotros": "pudisteis",    "ellos/ellas": "pudieron"},
    "querer":    {"yo": "quise",      "tú": "quisiste",    "él/ella": "quiso",      "nosotros": "quisimos",     "vosotros": "quisisteis",   "ellos/ellas": "quisieron"},
    "decir":     {"yo": "dije",       "tú": "dijiste",     "él/ella": "dijo",       "nosotros": "dijimos",      "vosotros": "dijisteis",    "ellos/ellas": "dijeron"},
    "ver":       {"yo": "vi",         "tú": "viste",       "él/ella": "vio",        "nosotros": "vimos",        "vosotros": "visteis",      "ellos/ellas": "vieron"},
    "dar":       {"yo": "di",         "tú": "diste",       "él/ella": "dio",        "nosotros": "dimos",        "vosotros": "disteis",      "ellos/ellas": "dieron"},
    "saber":     {"yo": "supe",       "tú": "supiste",     "él/ella": "supo",       "nosotros": "supimos",      "vosotros": "supisteis",    "ellos/ellas": "supieron"},
    "venir":     {"yo": "vine",       "tú": "viniste",     "él/ella": "vino",       "nosotros": "vinimos",      "vosotros": "vinisteis",    "ellos/ellas": "vinieron"},
    "poner":     {"yo": "puse",       "tú": "pusiste",     "él/ella": "puso",       "nosotros": "pusimos",      "vosotros": "pusisteis",    "ellos/ellas": "pusieron"},
    "salir":     {"yo": "salí",       "tú": "saliste",     "él/ella": "salió",      "nosotros": "salimos",      "vosotros": "salisteis",    "ellos/ellas": "salieron"},
    "escribir":  {"yo": "escribí",    "tú": "escribiste",  "él/ella": "escribió",   "nosotros": "escribimos",   "vosotros": "escribisteis", "ellos/ellas": "escribieron"},
    "leer":      {"yo": "leí",        "tú": "leíste",      "él/ella": "leyó",       "nosotros": "leímos",       "vosotros": "leísteis",     "ellos/ellas": "leyeron"},
    "beber":     {"yo": "bebí",       "tú": "bebiste",     "él/ella": "bebió",      "nosotros": "bebimos",      "vosotros": "bebisteis",    "ellos/ellas": "bebieron"},
    "abrir":     {"yo": "abrí",       "tú": "abriste",     "él/ella": "abrió",      "nosotros": "abrimos",      "vosotros": "abristeis",    "ellos/ellas": "abrieron"},
    "dormir":    {"yo": "dormí",      "tú": "dormiste",    "él/ella": "durmió",     "nosotros": "dormimos",     "vosotros": "dormisteis",   "ellos/ellas": "durmieron"},
    "jugar":     {"yo": "jugué",      "tú": "jugaste",     "él/ella": "jugó",       "nosotros": "jugamos",      "vosotros": "jugasteis",    "ellos/ellas": "jugaron"},
    "estudiar":  {"yo": "estudié",    "tú": "estudiaste",  "él/ella": "estudió",    "nosotros": "estudiamos",   "vosotros": "estudiasteis", "ellos/ellas": "estudiaron"},
    "trabajar":  {"yo": "trabajé",    "tú": "trabajaste",  "él/ella": "trabajó",    "nosotros": "trabajamos",   "vosotros": "trabajasteis", "ellos/ellas": "trabajaron"},
    "pensar":    {"yo": "pensé",      "tú": "pensaste",    "él/ella": "pensó",      "nosotros": "pensamos",     "vosotros": "pensasteis",   "ellos/ellas": "pensaron"},
    "llevar":    {"yo": "llevé",      "tú": "llevaste",    "él/ella": "llevó",      "nosotros": "llevamos",     "vosotros": "llevasteis",   "ellos/ellas": "llevaron"},
    "llegar":    {"yo": "llegué",     "tú": "llegaste",    "él/ella": "llegó",      "nosotros": "llegamos",     "vosotros": "llegasteis",   "ellos/ellas": "llegaron"},
    "pasar":     {"yo": "pasé",       "tú": "pasaste",     "él/ella": "pasó",       "nosotros": "pasamos",      "vosotros": "pasasteis",    "ellos/ellas": "pasaron"},
    "deber":     {"yo": "debí",       "tú": "debiste",     "él/ella": "debió",      "nosotros": "debimos",      "vosotros": "debisteis",    "ellos/ellas": "debieron"},
    "caminar":   {"yo": "caminé",     "tú": "caminaste",   "él/ella": "caminó",     "nosotros": "caminamos",    "vosotros": "caminasteis",  "ellos/ellas": "caminaron"},
    "correr":    {"yo": "corrí",      "tú": "corriste",    "él/ella": "corrió",     "nosotros": "corrimos",     "vosotros": "corristeis",   "ellos/ellas": "corrieron"},
    "escuchar":  {"yo": "escuché",    "tú": "escuchaste",  "él/ella": "escuchó",    "nosotros": "escuchamos",   "vosotros": "escuchasteis", "ellos/ellas": "escucharon"},
    "mirar":     {"yo": "miré",       "tú": "miraste",     "él/ella": "miró",       "nosotros": "miramos",      "vosotros": "mirasteis",    "ellos/ellas": "miraron"},
    "necesitar": {"yo": "necesité",   "tú": "necesitaste", "él/ella": "necesitó",   "nosotros": "necesitamos",  "vosotros": "necesitasteis","ellos/ellas": "necesitaron"},
    "usar":      {"yo": "usé",        "tú": "usaste",      "él/ella": "usó",        "nosotros": "usamos",       "vosotros": "usasteis",     "ellos/ellas": "usaron"},
    "comprar":   {"yo": "compré",     "tú": "compraste",   "él/ella": "compró",     "nosotros": "compramos",    "vosotros": "comprasteis",  "ellos/ellas": "compraron"},
    "volver":    {"yo": "volví",      "tú": "volviste",    "él/ella": "volvió",     "nosotros": "volvimos",     "vosotros": "volvisteis",   "ellos/ellas": "volvieron"},
    "encontrar": {"yo": "encontré",   "tú": "encontraste", "él/ella": "encontró",   "nosotros": "encontramos",  "vosotros": "encontrasteis","ellos/ellas": "encontraron"},
    "esperar":   {"yo": "esperé",     "tú": "esperaste",   "él/ella": "esperó",     "nosotros": "esperamos",    "vosotros": "esperasteis",  "ellos/ellas": "esperaron"},
    "entrar":    {"yo": "entré",      "tú": "entraste",    "él/ella": "entró",      "nosotros": "entramos",     "vosotros": "entrasteis",   "ellos/ellas": "entraron"},
    "cerrar":    {"yo": "cerré",      "tú": "cerraste",    "él/ella": "cerró",      "nosotros": "cerramos",     "vosotros": "cerrasteis",   "ellos/ellas": "cerraron"},
    "empezar":   {"yo": "empecé",     "tú": "empezaste",   "él/ella": "empezó",     "nosotros": "empezamos",    "vosotros": "empezasteis",  "ellos/ellas": "empezaron"},
    "preguntar": {"yo": "pregunté",   "tú": "preguntaste", "él/ella": "preguntó",   "nosotros": "preguntamos",  "vosotros": "preguntasteis","ellos/ellas": "preguntaron"},
    "ayudar":    {"yo": "ayudé",      "tú": "ayudaste",    "él/ella": "ayudó",      "nosotros": "ayudamos",     "vosotros": "ayudasteis",   "ellos/ellas": "ayudaron"},
    "llamar":    {"yo": "llamé",      "tú": "llamaste",    "él/ella": "llamó",      "nosotros": "llamamos",     "vosotros": "llamasteis",   "ellos/ellas": "llamaron"},
    "tomar":     {"yo": "tomé",       "tú": "tomaste",     "él/ella": "tomó",       "nosotros": "tomamos",      "vosotros": "tomasteis",    "ellos/ellas": "tomaron"},
    "seguir":    {"yo": "seguí",      "tú": "seguiste",    "él/ella": "siguió",     "nosotros": "seguimos",     "vosotros": "seguisteis",   "ellos/ellas": "siguieron"},
    "conocer":   {"yo": "conocí",     "tú": "conociste",   "él/ella": "conoció",    "nosotros": "conocimos",    "vosotros": "conocisteis",  "ellos/ellas": "conocieron"},
    "sentir":    {"yo": "sentí",      "tú": "sentiste",    "él/ella": "sintió",     "nosotros": "sentimos",     "vosotros": "sentisteis",   "ellos/ellas": "sintieron"},
}

VERB_CONJ_IMPERFECTO = {
    "hablar":    {"yo": "hablaba",    "tú": "hablabas",    "él/ella": "hablaba",    "nosotros": "hablábamos",   "vosotros": "hablabais",    "ellos/ellas": "hablaban"},
    "comer":     {"yo": "comía",      "tú": "comías",      "él/ella": "comía",      "nosotros": "comíamos",     "vosotros": "comíais",      "ellos/ellas": "comían"},
    "vivir":     {"yo": "vivía",      "tú": "vivías",      "él/ella": "vivía",      "nosotros": "vivíamos",     "vosotros": "vivíais",      "ellos/ellas": "vivían"},
    "ser":       {"yo": "era",        "tú": "eras",        "él/ella": "era",        "nosotros": "éramos",       "vosotros": "erais",        "ellos/ellas": "eran"},
    "estar":     {"yo": "estaba",     "tú": "estabas",     "él/ella": "estaba",     "nosotros": "estábamos",    "vosotros": "estabais",     "ellos/ellas": "estaban"},
    "tener":     {"yo": "tenía",      "tú": "tenías",      "él/ella": "tenía",      "nosotros": "teníamos",     "vosotros": "teníais",      "ellos/ellas": "tenían"},
    "ir":        {"yo": "iba",        "tú": "ibas",        "él/ella": "iba",        "nosotros": "íbamos",       "vosotros": "ibais",        "ellos/ellas": "iban"},
    "hacer":     {"yo": "hacía",      "tú": "hacías",      "él/ella": "hacía",      "nosotros": "hacíamos",     "vosotros": "hacíais",      "ellos/ellas": "hacían"},
    "poder":     {"yo": "podía",      "tú": "podías",      "él/ella": "podía",      "nosotros": "podíamos",     "vosotros": "podíais",      "ellos/ellas": "podían"},
    "querer":    {"yo": "quería",     "tú": "querías",     "él/ella": "quería",     "nosotros": "queríamos",    "vosotros": "queríais",     "ellos/ellas": "querían"},
    "decir":     {"yo": "decía",      "tú": "decías",      "él/ella": "decía",      "nosotros": "decíamos",     "vosotros": "decíais",      "ellos/ellas": "decían"},
    "ver":       {"yo": "veía",       "tú": "veías",       "él/ella": "veía",       "nosotros": "veíamos",      "vosotros": "veíais",       "ellos/ellas": "veían"},
    "dar":       {"yo": "daba",       "tú": "dabas",       "él/ella": "daba",       "nosotros": "dábamos",      "vosotros": "dabais",       "ellos/ellas": "daban"},
    "saber":     {"yo": "sabía",      "tú": "sabías",      "él/ella": "sabía",      "nosotros": "sabíamos",     "vosotros": "sabíais",      "ellos/ellas": "sabían"},
    "venir":     {"yo": "venía",      "tú": "venías",      "él/ella": "venía",      "nosotros": "veníamos",     "vosotros": "veníais",      "ellos/ellas": "venían"},
    "poner":     {"yo": "ponía",      "tú": "ponías",      "él/ella": "ponía",      "nosotros": "poníamos",     "vosotros": "poníais",      "ellos/ellas": "ponían"},
    "salir":     {"yo": "salía",      "tú": "salías",      "él/ella": "salía",      "nosotros": "salíamos",     "vosotros": "salíais",      "ellos/ellas": "salían"},
    "escribir":  {"yo": "escribía",   "tú": "escribías",   "él/ella": "escribía",   "nosotros": "escribíamos",  "vosotros": "escribíais",   "ellos/ellas": "escribían"},
    "leer":      {"yo": "leía",       "tú": "leías",       "él/ella": "leía",       "nosotros": "leíamos",      "vosotros": "leíais",       "ellos/ellas": "leían"},
    "beber":     {"yo": "bebía",      "tú": "bebías",      "él/ella": "bebía",      "nosotros": "bebíamos",     "vosotros": "bebíais",      "ellos/ellas": "bebían"},
    "abrir":     {"yo": "abría",      "tú": "abrías",      "él/ella": "abría",      "nosotros": "abríamos",     "vosotros": "abríais",      "ellos/ellas": "abrían"},
    "dormir":    {"yo": "dormía",     "tú": "dormías",     "él/ella": "dormía",     "nosotros": "dormíamos",    "vosotros": "dormíais",     "ellos/ellas": "dormían"},
    "jugar":     {"yo": "jugaba",     "tú": "jugabas",     "él/ella": "jugaba",     "nosotros": "jugábamos",    "vosotros": "jugabais",     "ellos/ellas": "jugaban"},
    "estudiar":  {"yo": "estudiaba",  "tú": "estudiabas",  "él/ella": "estudiaba",  "nosotros": "estudiábamos", "vosotros": "estudiabais",  "ellos/ellas": "estudiaban"},
    "trabajar":  {"yo": "trabajaba",  "tú": "trabajabas",  "él/ella": "trabajaba",  "nosotros": "trabajábamos", "vosotros": "trabajabais",  "ellos/ellas": "trabajaban"},
    "pensar":    {"yo": "pensaba",    "tú": "pensabas",    "él/ella": "pensaba",    "nosotros": "pensábamos",   "vosotros": "pensabais",    "ellos/ellas": "pensaban"},
    "llevar":    {"yo": "llevaba",    "tú": "llevabas",    "él/ella": "llevaba",    "nosotros": "llevábamos",   "vosotros": "llevabais",    "ellos/ellas": "llevaban"},
    "llegar":    {"yo": "llegaba",    "tú": "llegabas",    "él/ella": "llegaba",    "nosotros": "llegábamos",   "vosotros": "llegabais",    "ellos/ellas": "llegaban"},
    "pasar":     {"yo": "pasaba",     "tú": "pasabas",     "él/ella": "pasaba",     "nosotros": "pasábamos",    "vosotros": "pasabais",     "ellos/ellas": "pasaban"},
    "deber":     {"yo": "debía",      "tú": "debías",      "él/ella": "debía",      "nosotros": "debíamos",     "vosotros": "debíais",      "ellos/ellas": "debían"},
    "caminar":   {"yo": "caminaba",   "tú": "caminabas",   "él/ella": "caminaba",   "nosotros": "caminábamos",  "vosotros": "caminabais",   "ellos/ellas": "caminaban"},
    "correr":    {"yo": "corría",     "tú": "corrías",     "él/ella": "corría",     "nosotros": "corríamos",    "vosotros": "corríais",     "ellos/ellas": "corrían"},
    "escuchar":  {"yo": "escuchaba",  "tú": "escuchabas",  "él/ella": "escuchaba",  "nosotros": "escuchábamos", "vosotros": "escuchabais",  "ellos/ellas": "escuchaban"},
    "mirar":     {"yo": "miraba",     "tú": "mirabas",     "él/ella": "miraba",     "nosotros": "mirábamos",    "vosotros": "mirabais",     "ellos/ellas": "miraban"},
    "necesitar": {"yo": "necesitaba", "tú": "necesitabas", "él/ella": "necesitaba", "nosotros": "necesitábamos","vosotros": "necesitabais", "ellos/ellas": "necesitaban"},
    "usar":      {"yo": "usaba",      "tú": "usabas",      "él/ella": "usaba",      "nosotros": "usábamos",     "vosotros": "usabais",      "ellos/ellas": "usaban"},
    "comprar":   {"yo": "compraba",   "tú": "comprabas",   "él/ella": "compraba",   "nosotros": "comprábamos",  "vosotros": "comprabais",   "ellos/ellas": "compraban"},
    "volver":    {"yo": "volvía",     "tú": "volvías",     "él/ella": "volvía",     "nosotros": "volvíamos",    "vosotros": "volvíais",     "ellos/ellas": "volvían"},
    "encontrar": {"yo": "encontraba", "tú": "encontrabas", "él/ella": "encontraba", "nosotros": "encontrábamos","vosotros": "encontrabais", "ellos/ellas": "encontraban"},
    "esperar":   {"yo": "esperaba",   "tú": "esperabas",   "él/ella": "esperaba",   "nosotros": "esperábamos",  "vosotros": "esperabais",   "ellos/ellas": "esperaban"},
    "entrar":    {"yo": "entraba",    "tú": "entrabas",    "él/ella": "entraba",    "nosotros": "entrábamos",   "vosotros": "entrabais",    "ellos/ellas": "entraban"},
    "cerrar":    {"yo": "cerraba",    "tú": "cerrabas",    "él/ella": "cerraba",    "nosotros": "cerrábamos",   "vosotros": "cerrabais",    "ellos/ellas": "cerraban"},
    "empezar":   {"yo": "empezaba",   "tú": "empezabas",   "él/ella": "empezaba",   "nosotros": "empezábamos",  "vosotros": "empezabais",   "ellos/ellas": "empezaban"},
    "preguntar": {"yo": "preguntaba", "tú": "preguntabas", "él/ella": "preguntaba", "nosotros": "preguntábamos","vosotros": "preguntabais", "ellos/ellas": "preguntaban"},
    "ayudar":    {"yo": "ayudaba",    "tú": "ayudabas",    "él/ella": "ayudaba",    "nosotros": "ayudábamos",   "vosotros": "ayudabais",    "ellos/ellas": "ayudaban"},
    "llamar":    {"yo": "llamaba",    "tú": "llamabas",    "él/ella": "llamaba",    "nosotros": "llamábamos",   "vosotros": "llamabais",    "ellos/ellas": "llamaban"},
    "tomar":     {"yo": "tomaba",     "tú": "tomabas",     "él/ella": "tomaba",     "nosotros": "tomábamos",    "vosotros": "tomabais",     "ellos/ellas": "tomaban"},
    "seguir":    {"yo": "seguía",     "tú": "seguías",     "él/ella": "seguía",     "nosotros": "seguíamos",    "vosotros": "seguíais",     "ellos/ellas": "seguían"},
    "conocer":   {"yo": "conocía",    "tú": "conocías",    "él/ella": "conocía",    "nosotros": "conocíamos",   "vosotros": "conocíais",    "ellos/ellas": "conocían"},
    "sentir":    {"yo": "sentía",     "tú": "sentías",     "él/ella": "sentía",     "nosotros": "sentíamos",    "vosotros": "sentíais",     "ellos/ellas": "sentían"},
}

VERB_CONJ_SUBJUNTIVO = {
    "hablar":    {"yo": "hable",      "tú": "hables",      "él/ella": "hable",      "nosotros": "hablemos",     "vosotros": "habléis",      "ellos/ellas": "hablen"},
    "comer":     {"yo": "coma",       "tú": "comas",       "él/ella": "coma",       "nosotros": "comamos",      "vosotros": "comáis",       "ellos/ellas": "coman"},
    "vivir":     {"yo": "viva",       "tú": "vivas",       "él/ella": "viva",       "nosotros": "vivamos",      "vosotros": "viváis",       "ellos/ellas": "vivan"},
    "ser":       {"yo": "sea",        "tú": "seas",        "él/ella": "sea",        "nosotros": "seamos",       "vosotros": "seáis",        "ellos/ellas": "sean"},
    "estar":     {"yo": "esté",       "tú": "estés",       "él/ella": "esté",       "nosotros": "estemos",      "vosotros": "estéis",       "ellos/ellas": "estén"},
    "tener":     {"yo": "tenga",      "tú": "tengas",      "él/ella": "tenga",      "nosotros": "tengamos",     "vosotros": "tengáis",      "ellos/ellas": "tengan"},
    "ir":        {"yo": "vaya",       "tú": "vayas",       "él/ella": "vaya",       "nosotros": "vayamos",      "vosotros": "vayáis",       "ellos/ellas": "vayan"},
    "hacer":     {"yo": "haga",       "tú": "hagas",       "él/ella": "haga",       "nosotros": "hagamos",      "vosotros": "hagáis",       "ellos/ellas": "hagan"},
    "poder":     {"yo": "pueda",      "tú": "puedas",      "él/ella": "pueda",      "nosotros": "podamos",      "vosotros": "podáis",       "ellos/ellas": "puedan"},
    "querer":    {"yo": "quiera",     "tú": "quieras",     "él/ella": "quiera",     "nosotros": "queramos",     "vosotros": "queráis",      "ellos/ellas": "quieran"},
    "decir":     {"yo": "diga",       "tú": "digas",       "él/ella": "diga",       "nosotros": "digamos",      "vosotros": "digáis",       "ellos/ellas": "digan"},
    "ver":       {"yo": "vea",        "tú": "veas",        "él/ella": "vea",        "nosotros": "veamos",       "vosotros": "veáis",        "ellos/ellas": "vean"},
    "dar":       {"yo": "dé",         "tú": "des",         "él/ella": "dé",         "nosotros": "demos",        "vosotros": "deis",         "ellos/ellas": "den"},
    "saber":     {"yo": "sepa",       "tú": "sepas",       "él/ella": "sepa",       "nosotros": "sepamos",      "vosotros": "sepáis",       "ellos/ellas": "sepan"},
    "venir":     {"yo": "venga",      "tú": "vengas",      "él/ella": "venga",      "nosotros": "vengamos",     "vosotros": "vengáis",      "ellos/ellas": "vengan"},
    "poner":     {"yo": "ponga",      "tú": "pongas",      "él/ella": "ponga",      "nosotros": "pongamos",     "vosotros": "pongáis",      "ellos/ellas": "pongan"},
    "salir":     {"yo": "salga",      "tú": "salgas",      "él/ella": "salga",      "nosotros": "salgamos",     "vosotros": "salgáis",      "ellos/ellas": "salgan"},
    "escribir":  {"yo": "escriba",    "tú": "escribas",    "él/ella": "escriba",    "nosotros": "escribamos",   "vosotros": "escribáis",    "ellos/ellas": "escriban"},
    "leer":      {"yo": "lea",        "tú": "leas",        "él/ella": "lea",        "nosotros": "leamos",       "vosotros": "leáis",        "ellos/ellas": "lean"},
    "beber":     {"yo": "beba",       "tú": "bebas",       "él/ella": "beba",       "nosotros": "bebamos",      "vosotros": "bebáis",       "ellos/ellas": "beban"},
    "abrir":     {"yo": "abra",       "tú": "abras",       "él/ella": "abra",       "nosotros": "abramos",      "vosotros": "abráis",       "ellos/ellas": "abran"},
    "dormir":    {"yo": "duerma",     "tú": "duermas",     "él/ella": "duerma",     "nosotros": "durmamos",     "vosotros": "durmáis",      "ellos/ellas": "duerman"},
    "jugar":     {"yo": "juegue",     "tú": "juegues",     "él/ella": "juegue",     "nosotros": "juguemos",     "vosotros": "juguéis",      "ellos/ellas": "jueguen"},
    "estudiar":  {"yo": "estudie",    "tú": "estudies",    "él/ella": "estudie",    "nosotros": "estudiemos",   "vosotros": "estudiéis",    "ellos/ellas": "estudien"},
    "trabajar":  {"yo": "trabaje",    "tú": "trabajes",    "él/ella": "trabaje",    "nosotros": "trabajemos",   "vosotros": "trabajéis",    "ellos/ellas": "trabajen"},
    "pensar":    {"yo": "piense",     "tú": "pienses",     "él/ella": "piense",     "nosotros": "pensemos",     "vosotros": "penséis",      "ellos/ellas": "piensen"},
    "llevar":    {"yo": "lleve",      "tú": "lleves",      "él/ella": "lleve",      "nosotros": "llevemos",     "vosotros": "llevéis",      "ellos/ellas": "lleven"},
    "llegar":    {"yo": "llegue",     "tú": "llegues",     "él/ella": "llegue",     "nosotros": "lleguemos",    "vosotros": "lleguéis",     "ellos/ellas": "lleguen"},
    "pasar":     {"yo": "pase",       "tú": "pases",       "él/ella": "pase",       "nosotros": "pasemos",      "vosotros": "paséis",       "ellos/ellas": "pasen"},
    "deber":     {"yo": "deba",       "tú": "debas",       "él/ella": "deba",       "nosotros": "debamos",      "vosotros": "debáis",       "ellos/ellas": "deban"},
    "caminar":   {"yo": "camine",     "tú": "camines",     "él/ella": "camine",     "nosotros": "caminemos",    "vosotros": "caminéis",     "ellos/ellas": "caminen"},
    "correr":    {"yo": "corra",      "tú": "corras",      "él/ella": "corra",      "nosotros": "corramos",     "vosotros": "corráis",      "ellos/ellas": "corran"},
    "escuchar":  {"yo": "escuche",    "tú": "escuches",    "él/ella": "escuche",    "nosotros": "escuchemos",   "vosotros": "escuchéis",    "ellos/ellas": "escuchen"},
    "mirar":     {"yo": "mire",       "tú": "mires",       "él/ella": "mire",       "nosotros": "miremos",      "vosotros": "miréis",       "ellos/ellas": "miren"},
    "necesitar": {"yo": "necesite",   "tú": "necesites",   "él/ella": "necesite",   "nosotros": "necesitemos",  "vosotros": "necesitéis",   "ellos/ellas": "necesiten"},
    "usar":      {"yo": "use",        "tú": "uses",        "él/ella": "use",        "nosotros": "usemos",       "vosotros": "uséis",        "ellos/ellas": "usen"},
    "comprar":   {"yo": "compre",     "tú": "compres",     "él/ella": "compre",     "nosotros": "compremos",    "vosotros": "compréis",     "ellos/ellas": "compren"},
    "volver":    {"yo": "vuelva",     "tú": "vuelvas",     "él/ella": "vuelva",     "nosotros": "volvamos",     "vosotros": "volváis",      "ellos/ellas": "vuelvan"},
    "encontrar": {"yo": "encuentre",  "tú": "encuentres",  "él/ella": "encuentre",  "nosotros": "encontremos",  "vosotros": "encontréis",   "ellos/ellas": "encuentren"},
    "esperar":   {"yo": "espere",     "tú": "esperes",     "él/ella": "espere",     "nosotros": "esperemos",    "vosotros": "esperéis",     "ellos/ellas": "esperen"},
    "entrar":    {"yo": "entre",      "tú": "entres",      "él/ella": "entre",      "nosotros": "entremos",     "vosotros": "entréis",      "ellos/ellas": "entren"},
    "cerrar":    {"yo": "cierre",     "tú": "cierres",     "él/ella": "cierre",     "nosotros": "cerremos",     "vosotros": "cerréis",      "ellos/ellas": "cierren"},
    "empezar":   {"yo": "empiece",    "tú": "empieces",    "él/ella": "empiece",    "nosotros": "empecemos",    "vosotros": "empecéis",     "ellos/ellas": "empiecen"},
    "preguntar": {"yo": "pregunte",   "tú": "preguntes",   "él/ella": "pregunte",   "nosotros": "preguntemos",  "vosotros": "preguntéis",   "ellos/ellas": "pregunten"},
    "ayudar":    {"yo": "ayude",      "tú": "ayudes",      "él/ella": "ayude",      "nosotros": "ayudemos",     "vosotros": "ayudéis",      "ellos/ellas": "ayuden"},
    "llamar":    {"yo": "llame",      "tú": "llames",      "él/ella": "llame",      "nosotros": "llamemos",     "vosotros": "llaméis",      "ellos/ellas": "llamen"},
    "tomar":     {"yo": "tome",       "tú": "tomes",       "él/ella": "tome",       "nosotros": "tomemos",      "vosotros": "toméis",       "ellos/ellas": "tomen"},
    "seguir":    {"yo": "siga",       "tú": "sigas",       "él/ella": "siga",       "nosotros": "sigamos",      "vosotros": "sigáis",       "ellos/ellas": "sigan"},
    "conocer":   {"yo": "conozca",    "tú": "conozcas",    "él/ella": "conozca",    "nosotros": "conozcamos",   "vosotros": "conozcáis",    "ellos/ellas": "conozcan"},
    "sentir":    {"yo": "sienta",     "tú": "sientas",     "él/ella": "sienta",     "nosotros": "sintamos",     "vosotros": "sintáis",      "ellos/ellas": "sientan"},
}

ALL_TENSES = {
    "Presente":          VERB_CONJUGATIONS,
    "Pret. Indefinido":  VERB_CONJ_INDEFINIDO,
    "Pret. Imperfecto":  VERB_CONJ_IMPERFECTO,
    "Pres. Subjuntivo":  VERB_CONJ_SUBJUNTIVO,
}

THEMED_WORDS = {
    "Cosas de la cocina": [
        ("cuchillo", "нож"), ("tenedor", "вилка"), ("cuchara", "ложка"),
        ("plato", "тарелка"), ("vaso", "стакан"), ("olla", "кастрюля"),
        ("sartén", "сковородка"), ("nevera", "холодильник"), ("horno", "духовка"),
        ("microondas", "микроволновка"), ("taza", "чашка"), ("servilleta", "салфетка"),
        ("colador", "дуршлаг"), ("rallador", "тёрка"), ("batidor", "венчик"),
    ],
    "Verbos de movimiento": [
        ("correr", "бегать"), ("caminar", "ходить"), ("saltar", "прыгать"),
        ("nadar", "плавать"), ("volar", "летать"), ("caer", "падать"),
        ("subir", "подниматься"), ("bajar", "спускаться"), ("girar", "поворачивать"),
        ("empujar", "толкать"), ("jalar", "тянуть"), ("rodar", "катиться"),
        ("arrastar", "тащить"), ("escalar", "карабкаться"), ("deslizar", "скользить"),
    ],
    "Partes del cuerpo": [
        ("cabeza", "голова"), ("ojo", "глаз"), ("nariz", "нос"),
        ("boca", "рот"), ("oreja", "ухо"), ("cuello", "шея"),
        ("hombro", "плечо"), ("brazo", "рука"), ("mano", "кисть"),
        ("dedo", "палец"), ("pierna", "нога"), ("pie", "ступня"),
        ("rodilla", "колено"), ("espalda", "спина"), ("pecho", "грудь"),
        ("codo", "локоть"), ("tobillo", "лодыжка"), ("muñeca", "запястье"),
    ],
    "Animales": [
        ("perro", "собака"), ("gato", "кошка"), ("caballo", "лошадь"),
        ("vaca", "корова"), ("cerdo", "свинья"), ("pollo", "курица"),
        ("pato", "утка"), ("conejo", "кролик"), ("pez", "рыба"),
        ("pajaro", "птица"), ("oso", "медведь"), ("lobo", "волк"),
        ("zorro", "лиса"), ("tigre", "тигр"), ("elefante", "слон"),
        ("ardilla", "белка"), ("oveja", "овца"), ("leon", "лев"),
    ],
    "Ropa": [
        ("camisa", "рубашка"), ("pantalon", "брюки"), ("zapato", "ботинок"),
        ("vestido", "платье"), ("falda", "юбка"), ("calcetín", "носок"),
        ("abrigo", "пальто"), ("sombrero", "шляпа"), ("guante", "перчатка"),
        ("bufanda", "шарф"), ("cinturon", "ремень"), ("bolso", "сумка"),
        ("corbata", "галстук"), ("pijama", "пижама"), ("delantal", "фартук"),
    ],
    "Comida": [
        ("pan", "хлеб"), ("leche", "молоко"), ("huevo", "яйцо"),
        ("manzana", "яблоко"), ("naranja", "апельсин"), ("arroz", "рис"),
        ("sopa", "суп"), ("queso", "сыр"), ("tomate", "помидор"),
        ("cebolla", "лук"), ("ajo", "чеснок"), ("azucar", "сахар"),
        ("sal", "соль"), ("aceite", "масло"), ("mantequilla", "сливочное масло"),
        ("fresa", "клубника"), ("uva", "виноград"), ("platano", "банан"),
    ],
}

# Flat set of all vocabulary words (lowercase) for word-snake validation
ALL_VOCAB_WORDS = {w.lower() for cat in THEMED_WORDS.values() for w, _ in cat}

TRANSLATION_PHRASES = [
    ("Меня зовут Мария.", "Me llamo María."),
    ("Как тебя зовут?", "¿Cómo te llamas?"),
    ("Мне нравится испанский.", "Me gusta el español."),
    ("Где находится библиотека?", "¿Dónde está la biblioteca?"),
    ("Я хочу есть.", "Quiero comer."),
    ("Сколько это стоит?", "¿Cuánto cuesta?"),
    ("Я не понимаю.", "No entiendo."),
    ("Говорите медленнее, пожалуйста.", "Hable más despacio, por favor."),
    ("До свидания.", "Hasta luego."),
    ("Доброе утро.", "Buenos días."),
    ("Добрый вечер.", "Buenas noches."),
    ("Пожалуйста.", "Por favor."),
    ("Спасибо.", "Gracias."),
    ("Извините.", "Perdón."),
    ("Я не говорю по-испански.", "No hablo español."),
    ("Как дела?", "¿Cómo estás?"),
    ("Я живу в России.", "Vivo en Rusia."),
    ("Мне двадцать лет.", "Tengo veinte años."),
    ("Это моя семья.", "Esta es mi familia."),
    ("Мне нравится читать книги.", "Me gusta leer libros."),
    ("Где ты живёшь?", "¿Dónde vives?"),
    ("Я учу испанский.", "Estudio español."),
    ("Который час?", "¿Qué hora es?"),
    ("Сейчас три часа.", "Son las tres."),
    ("Мне холодно.", "Tengo frío."),
    ("Мне жарко.", "Tengo calor."),
    ("Открой окно.", "Abre la ventana."),
    ("Закрой дверь.", "Cierra la puerta."),
    ("Я устал.", "Estoy cansado."),
    ("Мне нужна помощь.", "Necesito ayuda."),
]


# ──────────────────────────────────────────────────────────────
# EDITOR: draw rectangles on image
# ──────────────────────────────────────────────────────────────
class DrawableImageLabel(QLabel):
    rectangleDrawn = pyqtSignal()

    WORD_COVER_COLOR = QColor(200, 200, 200, 255)
    WORD_BORDER_COLOR = QColor(255, 0, 0)

    def __init__(self):
        super().__init__()
        self.original_pixmap = None
        self.rectangles = []       # Each has 'type': 'word' or 'cover'
        self.current_rect = None
        self.is_drawing = False
        self.start_point = None
        self.scale_factor = 1.0
        self.draw_mode = 'word'    # 'word' or 'cover'
        self.cover_color = QColor(80, 80, 80, 255)  # current cover-only color (changeable)
        self.setAlignment(Qt.AlignCenter)
        self.setMinimumSize(400, 300)
        self.setStyleSheet("background-color: #e0e0e0; border: 2px solid #999;")
        self.setCursor(Qt.CrossCursor)

    def set_pixmap_from_clipboard(self):
        clipboard = QApplication.clipboard()
        if clipboard.mimeData().hasImage():
            image = clipboard.image()
            if not image.isNull():
                self.original_pixmap = QPixmap.fromImage(image)
                self.rectangles = []
                self.refresh()
                return True
        return False

    def load_from_file(self, path):
        pm = QPixmap(str(path))
        if pm.isNull():
            return False
        self.original_pixmap = pm
        self.rectangles = []
        self.refresh()
        return True

    def _image_offset(self):
        pm = self.pixmap()
        if pm is None or self.original_pixmap is None:
            return 0, 0
        return (self.width() - pm.width()) / 2, (self.height() - pm.height()) / 2

    def screen_to_image(self, pos):
        ox, oy = self._image_offset()
        return QPoint(int((pos.x() - ox) / self.scale_factor),
                      int((pos.y() - oy) / self.scale_factor))

    def refresh(self):
        if self.original_pixmap is None:
            return
        canvas = self.original_pixmap.copy()
        painter = QPainter(canvas)

        for rd in self.rectangles:
            if rd.get('type') == 'cover':
                c = QColor(rd.get('color', '#505050'))
                border = QColor(max(c.red()-40, 0), max(c.green()-40, 0), max(c.blue()-40, 0))
                painter.fillRect(rd['rect'], QBrush(c))
                painter.setPen(QPen(border, 3))
            else:
                painter.fillRect(rd['rect'], QBrush(self.WORD_COVER_COLOR))
                painter.setPen(QPen(self.WORD_BORDER_COLOR, 3))
            painter.drawRect(rd['rect'])

        if self.current_rect is not None:
            if self.draw_mode == 'cover':
                preview = QColor(self.cover_color)
                preview.setAlpha(160)
                painter.fillRect(self.current_rect, QBrush(preview))
                border = QColor(max(self.cover_color.red()-40, 0),
                                max(self.cover_color.green()-40, 0),
                                max(self.cover_color.blue()-40, 0))
                painter.setPen(QPen(border, 3))
            else:
                painter.fillRect(self.current_rect, QBrush(QColor(255, 200, 0, 120)))
                painter.setPen(QPen(self.WORD_BORDER_COLOR, 3))
            painter.drawRect(self.current_rect)
        painter.end()

        aw = max(self.width() - 10, 400)
        ah = max(self.height() - 10, 300)
        scaled = canvas.scaled(aw, ah, Qt.KeepAspectRatio, Qt.SmoothTransformation)
        self.scale_factor = scaled.width() / canvas.width()
        self.setPixmap(scaled)

    def resizeEvent(self, event):
        super().resizeEvent(event)
        self.refresh()

    def mousePressEvent(self, event):
        if self.original_pixmap is None or event.button() != Qt.LeftButton:
            return
        self.is_drawing = True
        self.start_point = self.screen_to_image(event.pos())

    def mouseMoveEvent(self, event):
        if not self.is_drawing or self.start_point is None:
            return
        self.current_rect = QRect(self.start_point, self.screen_to_image(event.pos())).normalized()
        self.refresh()

    def mouseReleaseEvent(self, event):
        if not self.is_drawing:
            return
        self.is_drawing = False
        if self.current_rect and self.current_rect.width() > 5 and self.current_rect.height() > 5:
            clamped = self.current_rect.intersected(self.original_pixmap.rect())
            if clamped.width() > 5 and clamped.height() > 5:
                entry = {
                    'id': f"word_{len(self.rectangles)}",
                    'rect': clamped,
                    'label': '',
                    'type': self.draw_mode,
                }
                if self.draw_mode == 'cover':
                    entry['color'] = self.cover_color.name()  # e.g. '#505050'
                self.rectangles.append(entry)
                self.current_rect = None
                self.refresh()
                self.rectangleDrawn.emit()
                return
        self.current_rect = None
        self.refresh()

    def undo(self):
        if self.rectangles:
            self.rectangles.pop()
            self.refresh()

    def clear_all(self):
        self.rectangles = []
        self.refresh()


# ──────────────────────────────────────────────────────────────
# PRACTICE: image that accepts drops directly on covered zones
# ──────────────────────────────────────────────────────────────
class ZoomScrollArea(QScrollArea):
    """Scroll area that forwards viewport resize events to the PracticeImageWidget."""
    def resizeEvent(self, event):
        super().resizeEvent(event)
        w = self.widget()
        if w is not None and hasattr(w, '_on_viewport_resize'):
            w._on_viewport_resize()


class PracticeImageWidget(QLabel):
    """Shows the image with covered rectangles. Students drop pieces directly on it."""
    correctDrop = pyqtSignal(str)   # rect_id
    wrongDrop = pyqtSignal()
    originalToggled = pyqtSignal(bool)  # True = showing original
    zoomChanged = pyqtSignal(float)     # zoom_factor

    MIN_ZOOM = 0.25
    MAX_ZOOM = 5.0

    def __init__(self):
        super().__init__()
        self.original_pixmap = None
        self.display_pixmap = None
        self.rect_configs = []
        self.solved_ids = set()
        self.scale_factor = 1.0
        self.showing_original = False
        self.zoom_factor = 1.0
        self._scroll_area = None  # Set by parent after construction
        self.setAlignment(Qt.AlignCenter)
        self.setMinimumSize(400, 300)
        self.setStyleSheet("background-color: #e0e0e0; border: 2px solid #999;")
        self.setAcceptDrops(True)
        self.setCursor(Qt.PointingHandCursor)

    def setup(self, pixmap, rect_configs):
        self.original_pixmap = pixmap
        self.rect_configs = rect_configs
        self.solved_ids = set()
        self.showing_original = False
        self._rebuild_display()

    # ── Zoom helpers ──────────────────────────────────────────

    def _viewport_size(self):
        """Return (w, h) of the scroll area viewport, or fall back to self size."""
        if self._scroll_area is not None:
            vp = self._scroll_area.viewport()
            return vp.width(), vp.height()
        return self.width(), self.height()

    def _on_viewport_resize(self):
        """Called by ZoomScrollArea when its viewport changes size."""
        if self.showing_original:
            self.show_original()
        else:
            self._scale_and_show()

    def zoom_in(self):
        self.set_zoom(min(self.zoom_factor * 1.25, self.MAX_ZOOM))

    def zoom_out(self):
        self.set_zoom(max(self.zoom_factor / 1.25, self.MIN_ZOOM))

    def zoom_reset(self):
        self.set_zoom(1.0)

    def set_zoom(self, factor):
        self.zoom_factor = factor
        if self.showing_original:
            self.show_original()
        else:
            self._scale_and_show()
        self.zoomChanged.emit(self.zoom_factor)

    def wheelEvent(self, event):
        if event.modifiers() & Qt.ControlModifier:
            delta = event.angleDelta().y()
            if delta > 0:
                self.zoom_in()
            else:
                self.zoom_out()
            event.accept()
        else:
            super().wheelEvent(event)

    # ── Display ───────────────────────────────────────────────

    def show_original(self):
        """Display the clean unmodified image."""
        if self.original_pixmap is None:
            return
        self.showing_original = True
        vw, vh = self._viewport_size()
        aw = max(vw - 10, 400)
        ah = max(vh - 10, 300)
        base = self.original_pixmap.scaled(aw, ah, Qt.KeepAspectRatio, Qt.SmoothTransformation)
        tw = int(base.width() * self.zoom_factor)
        th = int(base.height() * self.zoom_factor)
        scaled = self.original_pixmap.scaled(tw, th, Qt.KeepAspectRatio, Qt.SmoothTransformation)
        self.scale_factor = scaled.width() / self.original_pixmap.width()
        self.setPixmap(scaled)
        self._resize_to(scaled, aw, ah)
        self.setStyleSheet("background-color: #e0e0e0; border: 3px solid #2196F3;")

    def hide_original(self):
        """Return to the covered exercise view."""
        self.showing_original = False
        self.setStyleSheet("background-color: #e0e0e0; border: 2px solid #999;")
        self._scale_and_show()

    def toggle_original(self):
        if self.showing_original:
            self.hide_original()
        else:
            self.show_original()
        self.originalToggled.emit(self.showing_original)

    def mousePressEvent(self, event):
        if event.button() == Qt.LeftButton:
            self.toggle_original()
        super().mousePressEvent(event)

    def _rebuild_display(self):
        """Rebuild the display pixmap: original image with unsolved zones covered."""
        if self.original_pixmap is None:
            return
        canvas = self.original_pixmap.copy()
        painter = QPainter(canvas)

        cover_word = QBrush(QColor(190, 190, 190, 255))
        pen_dash = QPen(QColor(100, 100, 100), 2, Qt.DashLine)
        solved_pen = QPen(QColor(76, 175, 80), 4)

        for rc in self.rect_configs:
            r = QRect(rc['x'], rc['y'], rc['width'], rc['height'])

            # Cover-only rectangles: always hidden, use saved color
            if rc.get('type') == 'cover':
                c = QColor(rc.get('color', '#505050'))
                border = QColor(max(c.red()-40, 0), max(c.green()-40, 0), max(c.blue()-40, 0))
                painter.fillRect(r, QBrush(c))
                painter.setPen(QPen(border, 2))
                painter.drawRect(r)
                continue

            # Word rectangles: interactive
            if rc['id'] not in self.solved_ids:
                painter.fillRect(r, cover_word)
                painter.setPen(pen_dash)
                painter.drawRect(r)
                # Draw a "?" in the center
                painter.setPen(QPen(QColor(80, 80, 80)))
                f = QFont()
                f.setPointSize(max(12, r.height() // 3))
                f.setBold(True)
                painter.setFont(f)
                painter.drawText(r, Qt.AlignCenter, "?")
            else:
                painter.setPen(solved_pen)
                painter.drawRect(r)

        painter.end()
        self.display_pixmap = canvas
        self._scale_and_show()

    def _resize_to(self, scaled_pixmap, base_aw, base_ah):
        """Resize the widget to fit the scaled pixmap (with margins for scroll area use)."""
        new_w = max(scaled_pixmap.width() + 20, base_aw + 10)
        new_h = max(scaled_pixmap.height() + 20, base_ah + 10)
        self.setMinimumSize(new_w, new_h)
        self.resize(new_w, new_h)

    def _scale_and_show(self):
        if self.display_pixmap is None:
            return
        vw, vh = self._viewport_size()
        aw = max(vw - 10, 400)
        ah = max(vh - 10, 300)
        base = self.display_pixmap.scaled(aw, ah, Qt.KeepAspectRatio, Qt.SmoothTransformation)
        tw = int(base.width() * self.zoom_factor)
        th = int(base.height() * self.zoom_factor)
        scaled = self.display_pixmap.scaled(tw, th, Qt.KeepAspectRatio, Qt.SmoothTransformation)
        self.scale_factor = scaled.width() / self.display_pixmap.width()
        self.setPixmap(scaled)
        self._resize_to(scaled, aw, ah)

    def resizeEvent(self, event):
        super().resizeEvent(event)
        # When inside a ZoomScrollArea, resizes come via _on_viewport_resize instead
        if self._scroll_area is None:
            if self.showing_original:
                self.show_original()
            else:
                self._scale_and_show()

    def _screen_to_image(self, pos):
        pm = self.pixmap()
        if pm is None:
            return QPoint(0, 0)
        ox = (self.width() - pm.width()) / 2
        oy = (self.height() - pm.height()) / 2
        return QPoint(int((pos.x() - ox) / self.scale_factor),
                      int((pos.y() - oy) / self.scale_factor))

    def _rect_at(self, img_point):
        """Return the rect config whose area contains img_point, or None."""
        for rc in self.rect_configs:
            if rc.get('type') == 'cover':
                continue  # cover-only zones are never drop targets
            r = QRect(rc['x'], rc['y'], rc['width'], rc['height'])
            if r.contains(img_point) and rc['id'] not in self.solved_ids:
                return rc
        return None

    def dragEnterEvent(self, event):
        if event.mimeData().hasText():
            event.acceptProposedAction()

    def dragMoveEvent(self, event):
        if event.mimeData().hasText():
            event.acceptProposedAction()

    def dropEvent(self, event):
        if not event.mimeData().hasText():
            return
        dropped_id = event.mimeData().text()
        img_pos = self._screen_to_image(event.pos())
        target = self._rect_at(img_pos)

        if target and target['id'] == dropped_id:
            self.solved_ids.add(dropped_id)
            self._rebuild_display()
            self.correctDrop.emit(dropped_id)
        else:
            self.wrongDrop.emit()
        event.acceptProposedAction()


# ──────────────────────────────────────────────────────────────
# DRAGGABLE PIECE (shown at full extracted size)
# ──────────────────────────────────────────────────────────────
class DraggableSquare(QLabel):
    def __init__(self, pixmap_piece, rect_id):
        super().__init__()
        self.rect_id = rect_id
        self.placed = False
        self.setPixmap(pixmap_piece)
        self.setStyleSheet("border: 3px solid #FF6B6B; border-radius: 5px; padding: 3px; background: white;")
        self.setCursor(Qt.OpenHandCursor)
        self.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)

    def mousePressEvent(self, event):
        if event.button() == Qt.LeftButton and not self.placed:
            drag = QDrag(self)
            mime = QMimeData()
            mime.setText(self.rect_id)
            drag.setMimeData(mime)
            # Show a smaller preview while dragging
            preview = self.pixmap().scaled(80, 80, Qt.KeepAspectRatio, Qt.SmoothTransformation)
            drag.setPixmap(preview)
            drag.setHotSpot(QPoint(preview.width() // 2, preview.height() // 2))
            self.setCursor(Qt.ClosedHandCursor)
            drag.exec_(Qt.MoveAction)
            self.setCursor(Qt.OpenHandCursor if not self.placed else Qt.ForbiddenCursor)


# ──────────────────────────────────────────────────────────────
# JUEGO 1: CONJUGACIÓN RÁPIDA
# ──────────────────────────────────────────────────────────────
class ConjugacionRapidaWidget(QWidget):
    MIN_TIME = 2.0
    TIME_REDUCTION = 0.25
    # (label, seconds) — user picks the starting speed
    _SPEEDS = [("🐢  Lento", 12.0), ("🚶  Normal", 8.0), ("🏃  Rápido", 5.0), ("⚡  Turbo", 3.0)]

    # No border-radius on QLineEdit → fixes cursor disappearing on Windows
    _CARD_IDLE = ("QFrame{background:#E3F2FD;border-left:4px solid #90CAF9;}")
    _CARD_OK   = ("QFrame{background:#E8F5E9;border-left:4px solid #4CAF50;}")
    _CARD_ERR  = ("QFrame{background:#FFEBEE;border-left:4px solid #EF9A9A;}")
    _INPUT_BASE = ("QLineEdit{border:0;border-bottom:2px solid #90CAF9;"
                   "padding:8px;font-size:20px;background:white;color:#212121;}"
                   "QLineEdit:focus{border-bottom:2px solid #1565C0;}")
    _INPUT_OK   = ("QLineEdit{border:0;border-bottom:2px solid #4CAF50;"
                   "padding:8px;font-size:20px;background:#E8F5E9;color:#1B5E20;}")
    _INPUT_ERR  = ("QLineEdit{border:0;border-bottom:2px solid #EF5350;"
                   "padding:8px;font-size:20px;background:#FFEBEE;color:#B71C1C;}")

    def __init__(self):
        super().__init__()
        self._timer = QTimer()
        self._timer.setInterval(100)
        self._timer.timeout.connect(self._tick)
        # default speed: Normal (index 1)
        self._base_speed = self._SPEEDS[1][1]
        self._time_limit = self._base_speed
        self._time_left = self._base_speed
        self._streak = 0
        self._correct = 0
        self._wrong = 0
        self._active = False
        self._answer = ""
        self._cur_verb = ""
        self._cur_pron = ""
        self._cur_tense = "Presente"
        self._selected_tenses = {"Presente"}
        self._speed_btns = []
        self._tense_btns = {}
        self._setup_ui()

    def _setup_ui(self):
        root = QVBoxLayout(self)
        root.setContentsMargins(14, 14, 14, 14)
        root.setSpacing(8)

        # ── Header ───────────────────────────────────────────
        header = QFrame()
        header.setStyleSheet("QFrame{background:#1A237E;}")
        hl = QHBoxLayout(header)
        hl.setContentsMargins(16, 10, 16, 10)
        t = QLabel("⚡ Conjugación Rápida")
        t.setFont(QFont("Arial", 17, QFont.Bold))
        t.setStyleSheet("color:white;")
        hl.addWidget(t)
        hl.addStretch()
        self._score_lbl = QLabel("✓ 0   ✗ 0")
        self._score_lbl.setFont(QFont("Arial", 14))
        self._score_lbl.setStyleSheet("color:#90CAF9;")
        hl.addWidget(self._score_lbl)
        root.addWidget(header)

        # ── Speed selector row ───────────────────────────────
        spd_row = QHBoxLayout()
        spd_row.setSpacing(4)
        spd_lbl = QLabel("Velocidad:")
        spd_lbl.setFont(QFont("Arial", 12, QFont.Bold))
        spd_lbl.setStyleSheet("color:#4A148C;")
        spd_row.addWidget(spd_lbl)

        spd_group = QButtonGroup(self)
        spd_group.setExclusive(True)
        for i, (label, secs) in enumerate(self._SPEEDS):
            btn = QPushButton(label)
            btn.setCheckable(True)
            btn.setFixedHeight(32)
            btn.setFont(QFont("Arial", 11))
            btn.setStyleSheet(
                "QPushButton{background:#EDE7F6;color:#4A148C;border:1px solid #B39DDB;"
                "padding:4px 12px;}"
                "QPushButton:checked{background:#7C4DFF;color:white;border:1px solid #7C4DFF;}"
                "QPushButton:hover:!checked{background:#D1C4E9;}")
            btn.clicked.connect(lambda _, s=secs, b=btn: self._set_speed(s))
            spd_group.addButton(btn)
            self._speed_btns.append(btn)
            spd_row.addWidget(btn)
            if i == 1:   # Normal selected by default
                btn.setChecked(True)

        spd_row.addStretch()
        self._streak_lbl = QLabel("Racha: 0")
        self._streak_lbl.setFont(QFont("Arial", 14, QFont.Bold))
        self._streak_lbl.setStyleSheet("color:#E65100;")
        spd_row.addWidget(self._streak_lbl)
        root.addLayout(spd_row)

        # ── Tense selector row ───────────────────────────────
        tns_row = QHBoxLayout()
        tns_row.setSpacing(4)
        tns_lbl = QLabel("Tiempo:")
        tns_lbl.setFont(QFont("Arial", 12, QFont.Bold))
        tns_lbl.setStyleSheet("color:#1A237E;")
        tns_row.addWidget(tns_lbl)

        _TENSE_COLORS = {
            "Presente":         ("#E8F5E9", "#2E7D32", "#1B5E20"),
            "Pret. Indefinido": ("#E3F2FD", "#1565C0", "#0D47A1"),
            "Pret. Imperfecto": ("#FFF3E0", "#E65100", "#BF360C"),
            "Pres. Subjuntivo": ("#F3E5F5", "#6A1B9A", "#4A148C"),
        }
        for tense_name in ALL_TENSES:
            bg, fg, fg_chk = _TENSE_COLORS[tense_name]
            btn = QPushButton(tense_name)
            btn.setCheckable(True)
            btn.setChecked(tense_name in self._selected_tenses)
            btn.setFixedHeight(32)
            btn.setFont(QFont("Arial", 11))
            btn.setStyleSheet(
                f"QPushButton{{background:{bg};color:{fg};border:1px solid {fg};"
                f"padding:4px 10px;}}"
                f"QPushButton:checked{{background:{fg};color:white;border:1px solid {fg};}}"
                f"QPushButton:hover:!checked{{background:{bg};border:2px solid {fg};}}")
            btn.clicked.connect(lambda _, t=tense_name: self._toggle_tense(t))
            self._tense_btns[tense_name] = btn
            tns_row.addWidget(btn)

        tns_row.addStretch()
        root.addLayout(tns_row)

        # ── Two-column: game | history ───────────────────────
        cols = QHBoxLayout()
        cols.setSpacing(14)
        left = QVBoxLayout()
        left.setSpacing(8)

        # Question area (flat, no rounded corners)
        self._card = QFrame()
        self._card.setStyleSheet(self._CARD_IDLE)
        self._card.setMinimumHeight(170)
        cl = QVBoxLayout(self._card)
        cl.setAlignment(Qt.AlignCenter)
        cl.setSpacing(4)

        self._tense_lbl = QLabel("")
        self._tense_lbl.setFont(QFont("Arial", 12, QFont.Bold))
        self._tense_lbl.setAlignment(Qt.AlignCenter)
        self._tense_lbl.setStyleSheet("color:#546E7A;background:transparent;letter-spacing:1px;")
        cl.addWidget(self._tense_lbl)

        self._verb_lbl = QLabel("")
        self._verb_lbl.setFont(QFont("Arial", 54, QFont.Bold))
        self._verb_lbl.setAlignment(Qt.AlignCenter)
        self._verb_lbl.setStyleSheet("color:#1565C0;background:transparent;")
        cl.addWidget(self._verb_lbl)

        # Pronoun as plain bold colored text (no badge frame)
        self._pron_lbl = QLabel("")
        self._pron_lbl.setFont(QFont("Arial", 24, QFont.Bold))
        self._pron_lbl.setAlignment(Qt.AlignCenter)
        self._pron_lbl.setStyleSheet("color:#E65100;background:transparent;")
        cl.addWidget(self._pron_lbl)

        left.addWidget(self._card, 1)

        # Timer row
        tr = QHBoxLayout()
        self._bar = QProgressBar()
        self._bar.setMaximum(100)
        self._bar.setValue(100)
        self._bar.setTextVisible(False)
        self._bar.setFixedHeight(18)
        tr.addWidget(self._bar)
        self._timer_lbl = QLabel("8.0s")
        self._timer_lbl.setFont(QFont("Arial", 13, QFont.Bold))
        self._timer_lbl.setFixedWidth(46)
        self._timer_lbl.setAlignment(Qt.AlignCenter)
        tr.addWidget(self._timer_lbl)
        left.addLayout(tr)

        # Feedback
        self._fb_lbl = QLabel("")
        self._fb_lbl.setFont(QFont("Arial", 16, QFont.Bold))
        self._fb_lbl.setAlignment(Qt.AlignCenter)
        self._fb_lbl.setMinimumHeight(28)
        left.addWidget(self._fb_lbl)

        # Input — no border-radius, fixes cursor on Windows
        self._input = QLineEdit()
        self._input.setPlaceholderText("Escribe la conjugación y pulsa Enter…")
        self._input.setFont(QFont("Arial", 20))
        self._input.setAlignment(Qt.AlignCenter)
        self._input.setStyleSheet(self._INPUT_BASE)
        self._input.returnPressed.connect(self._check)
        left.addWidget(self._input)

        # Start/stop
        self._start_btn = QPushButton("▶  Empezar")
        self._start_btn.setFont(QFont("Arial", 13, QFont.Bold))
        self._start_btn.setFixedHeight(40)
        self._start_btn.setStyleSheet(
            "QPushButton{background:#2E7D32;color:white;}"
            "QPushButton:hover{background:#388E3C;}")
        self._start_btn.clicked.connect(self._toggle)
        left.addWidget(self._start_btn)

        cols.addLayout(left, 3)

        # History panel (flat, no rounded corners)
        hist_frame = QFrame()
        hist_frame.setStyleSheet(
            "QFrame{background:#FAFAFA;border-left:3px solid #E0E0E0;}")
        hist_frame.setFixedWidth(230)
        hfl = QVBoxLayout(hist_frame)
        hfl.setContentsMargins(10, 10, 10, 10)
        hfl.setSpacing(6)
        ht = QLabel("Últimas respuestas")
        ht.setFont(QFont("Arial", 11, QFont.Bold))
        ht.setStyleSheet("color:#546E7A;border-bottom:1px solid #CFD8DC;padding-bottom:4px;")
        hfl.addWidget(ht)
        hs = QScrollArea()
        hs.setWidgetResizable(True)
        hs.setStyleSheet("QScrollArea{border:none;background:transparent;}")
        hc = QWidget()
        hc.setStyleSheet("background:transparent;")
        self._hist_layout = QVBoxLayout(hc)
        self._hist_layout.setAlignment(Qt.AlignTop)
        self._hist_layout.setSpacing(2)
        hs.setWidget(hc)
        hfl.addWidget(hs)
        cols.addWidget(hist_frame, 0)

        root.addLayout(cols, 1)

    # ── Game logic ───────────────────────────────────────────

    def _set_speed(self, secs):
        self._base_speed = secs
        self._time_limit = secs   # apply immediately to current round too

    def _toggle_tense(self, tense_name):
        if tense_name in self._selected_tenses:
            if len(self._selected_tenses) == 1:
                self._tense_btns[tense_name].setChecked(True)
                return
            self._selected_tenses.discard(tense_name)
        else:
            self._selected_tenses.add(tense_name)
        self._tense_btns[tense_name].setChecked(tense_name in self._selected_tenses)

    def _toggle(self):
        if self._active:
            self._stop()
        else:
            self._start()

    def _start(self):
        self._active = True
        self._streak = 0
        self._correct = 0
        self._wrong = 0
        self._time_limit = self._base_speed
        clear_layout(self._hist_layout)
        self._start_btn.setText("⏹  Parar")
        self._start_btn.setStyleSheet(
            "QPushButton{background:#C62828;color:white;}"
            "QPushButton:hover{background:#E53935;}")
        self._next()

    def _stop(self):
        self._active = False
        self._timer.stop()
        self._start_btn.setText("▶  Empezar")
        self._start_btn.setStyleSheet(
            "QPushButton{background:#2E7D32;color:white;}"
            "QPushButton:hover{background:#388E3C;}")
        self._card.setStyleSheet(self._CARD_IDLE)
        self._tense_lbl.setText("")
        self._verb_lbl.setText("")
        self._pron_lbl.setText("")
        self._input.clear()
        self._input.setStyleSheet(self._INPUT_BASE)
        self._timer_lbl.setText("—")
        self._bar.setValue(0)
        self._fb_lbl.setText(
            f"Fin  ·  {self._correct} correctas  ·  {self._wrong} errores")
        self._fb_lbl.setStyleSheet("color:#455A64; font-size:15px;")

    def _next(self):
        if not self._active:
            return
        active = [t for t in ALL_TENSES if t in self._selected_tenses]
        tense_name = random.choice(active)
        tense_data = ALL_TENSES[tense_name]
        verb = random.choice(list(tense_data.keys()))
        pron = random.choice(list(tense_data[verb].keys()))
        self._cur_verb = verb
        self._cur_pron = pron
        self._cur_tense = tense_name
        self._answer = tense_data[verb][pron]
        self._tense_lbl.setText(tense_name.upper())
        self._verb_lbl.setText(verb)
        self._pron_lbl.setText(pron)
        self._card.setStyleSheet(self._CARD_IDLE)
        self._input.clear()
        self._input.setStyleSheet(self._INPUT_BASE)
        self._fb_lbl.setText("")
        self._input.setFocus()
        self._time_left = self._time_limit
        self._update_bar()
        self._timer.start()

    def _tick(self):
        self._time_left -= 0.1
        self._update_bar()
        if self._time_left <= 0:
            self._time_up()

    def _update_bar(self):
        pct = max(0, int(100 * self._time_left / self._time_limit))
        self._bar.setValue(pct)
        secs = max(0.0, self._time_left)
        self._timer_lbl.setText(f"{secs:.1f}s")
        color = "#4CAF50" if pct > 50 else "#FF9800" if pct > 25 else "#F44336"
        self._bar.setStyleSheet(
            f"QProgressBar{{background:#E0E0E0;}}"
            f"QProgressBar::chunk{{background:{color};}}")
        self._timer_lbl.setStyleSheet(
            f"color:{color};font-weight:bold;font-size:13px;")

    def _time_up(self):
        self._timer.stop()
        self._streak = 0
        self._wrong += 1
        self._time_limit = self._base_speed   # reset to selected speed
        self._update_labels()
        self._card.setStyleSheet(self._CARD_ERR)
        self._fb_lbl.setText(f"⏰ Tiempo  →  {self._answer}")
        self._fb_lbl.setStyleSheet("color:#C62828; font-size:16px;")
        self._add_history(False, self._cur_verb, self._cur_pron, self._answer)
        QTimer.singleShot(1400, self._next)

    def _check(self):
        if not self._active:
            return
        self._timer.stop()
        given = self._input.text().strip().lower()
        ok = given == self._answer.lower()
        if ok:
            self._streak += 1
            self._correct += 1
            self._time_limit = max(self.MIN_TIME, self._time_limit - self.TIME_REDUCTION)
            fire = " 🔥" * min(self._streak, 5)
            self._fb_lbl.setText(f"✅ ¡Correcto!{fire}")
            self._fb_lbl.setStyleSheet("color:#2E7D32; font-size:16px;")
            self._card.setStyleSheet(self._CARD_OK)
            self._input.setStyleSheet(self._INPUT_OK)
        else:
            self._streak = 0
            self._wrong += 1
            self._time_limit = self._base_speed   # reset to selected speed
            self._fb_lbl.setText(f"❌  Era:  {self._answer}")
            self._fb_lbl.setStyleSheet("color:#C62828; font-size:16px;")
            self._card.setStyleSheet(self._CARD_ERR)
            self._input.setStyleSheet(self._INPUT_ERR)
        self._update_labels()
        self._add_history(ok, self._cur_verb, self._cur_pron, self._answer)
        QTimer.singleShot(1200, self._next)

    def _update_labels(self):
        s = self._streak
        fire = (" 🔥🔥🔥🔥🔥" if s >= 10 else " 🔥🔥🔥" if s >= 5 else " 🔥" if s >= 3 else "")
        self._streak_lbl.setText(f"Racha: {s}{fire}")
        self._score_lbl.setText(f"✓ {self._correct}   ✗ {self._wrong}")

    def _add_history(self, ok, verb, pron, answer):
        icon, color = ("✅", "#2E7D32") if ok else ("❌", "#C62828")
        lbl = QLabel(f"{icon} <b>{verb}</b> [{pron}]<br>"
                     f"<span style='color:#78909C;font-size:9px;'>{self._cur_tense}</span>"
                     f" → {answer}")
        lbl.setFont(QFont("Arial", 10))
        lbl.setStyleSheet(
            f"color:{color};padding:2px 4px;"
            "border-bottom:1px solid #EEEEEE;")
        lbl.setWordWrap(True)
        self._hist_layout.insertWidget(0, lbl)
        while self._hist_layout.count() > 15:
            item = self._hist_layout.takeAt(self._hist_layout.count() - 1)
            if item.widget():
                item.widget().deleteLater()


# ──────────────────────────────────────────────────────────────
# JUEGO 2: AHORCADO TEMÁTICO
# ──────────────────────────────────────────────────────────────
class HangmanDrawWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.wrong = 0
        self.setMinimumSize(200, 260)

    def set_wrong(self, n):
        self.wrong = n
        self.update()

    def paintEvent(self, event):
        p = QPainter(self)
        p.setRenderHint(QPainter.Antialiasing)
        pen = QPen(QColor(40, 40, 40), 4)
        p.setPen(pen)
        w, h = self.width(), self.height()
        cx = w // 2
        # Gallows
        p.drawLine(20, h - 20, w - 20, h - 20)
        p.drawLine(55, h - 20, 55, 20)
        p.drawLine(55, 20, cx, 20)
        p.drawLine(cx, 20, cx, 55)
        if self.wrong >= 1:
            p.setPen(QPen(QColor(180, 30, 30), 4))
            p.drawEllipse(cx - 20, 55, 40, 40)
        if self.wrong >= 2:
            p.drawLine(cx, 95, cx, 165)
        if self.wrong >= 3:
            p.drawLine(cx, 110, cx - 35, 145)
        if self.wrong >= 4:
            p.drawLine(cx, 110, cx + 35, 145)
        if self.wrong >= 5:
            p.drawLine(cx, 165, cx - 35, 210)
        if self.wrong >= 6:
            p.drawLine(cx, 165, cx + 35, 210)
        p.end()


class AhorcadoWidget(QWidget):
    MAX_WRONG = 6

    def __init__(self):
        super().__init__()
        self._word = ""
        self._russian = ""
        self._guessed = set()
        self._wrong = 0
        self._active = False
        self._setup_ui()

    def _setup_ui(self):
        root = QVBoxLayout(self)
        root.setAlignment(Qt.AlignTop)

        title = QLabel("🎯 Ahorcado Temático")
        title.setFont(QFont("Arial", 22, QFont.Bold))
        title.setAlignment(Qt.AlignCenter)
        root.addWidget(title)

        top = QHBoxLayout()
        top.addWidget(QLabel("Categoría:"))
        self._cat_combo = QComboBox()
        self._cat_combo.addItems(list(THEMED_WORDS.keys()))
        top.addWidget(self._cat_combo)
        btn = QPushButton("▶  Nueva palabra")
        btn.setStyleSheet("background:#1565C0;color:white;border-radius:5px;padding:6px 12px;")
        btn.clicked.connect(self._new_game)
        top.addWidget(btn)
        root.addLayout(top)

        game = QHBoxLayout()

        self._draw = HangmanDrawWidget()
        self._draw.setFixedSize(220, 260)
        game.addWidget(self._draw)

        right = QVBoxLayout()
        right.setAlignment(Qt.AlignTop)

        self._word_lbl = QLabel("_ _ _ _")
        self._word_lbl.setFont(QFont("Courier New", 38, QFont.Bold))
        self._word_lbl.setAlignment(Qt.AlignCenter)
        self._word_lbl.setStyleSheet("color:#1A237E; letter-spacing:6px; padding:10px;")
        right.addWidget(self._word_lbl)

        self._cat_lbl = QLabel("")
        self._cat_lbl.setStyleSheet("color:#455A64; font-style:italic; font-size:14px;")
        self._cat_lbl.setAlignment(Qt.AlignCenter)
        right.addWidget(self._cat_lbl)

        self._wrong_lbl = QLabel("Letras incorrectas: —")
        self._wrong_lbl.setFont(QFont("Arial", 14))
        self._wrong_lbl.setStyleSheet("color:#C62828;")
        right.addWidget(self._wrong_lbl)

        inp = QHBoxLayout()
        lbl = QLabel("Letra:")
        lbl.setFont(QFont("Arial", 14))
        inp.addWidget(lbl)
        self._letter_input = QLineEdit()
        self._letter_input.setMaxLength(1)
        self._letter_input.setFont(QFont("Arial", 22))
        self._letter_input.setFixedWidth(55)
        self._letter_input.setAlignment(Qt.AlignCenter)
        self._letter_input.returnPressed.connect(self._guess)
        inp.addWidget(self._letter_input)
        g_btn = QPushButton("Adivinar")
        g_btn.setStyleSheet("background:#388E3C;color:white;border-radius:5px;padding:6px 12px;")
        g_btn.clicked.connect(self._guess)
        inp.addWidget(g_btn)
        right.addLayout(inp)

        self._result_lbl = QLabel("")
        self._result_lbl.setFont(QFont("Arial", 16, QFont.Bold))
        self._result_lbl.setAlignment(Qt.AlignCenter)
        self._result_lbl.setWordWrap(True)
        right.addWidget(self._result_lbl)

        game.addLayout(right, 1)
        root.addLayout(game)

    def _new_game(self):
        cat = self._cat_combo.currentText()
        pairs = THEMED_WORDS.get(cat, [])
        if not pairs:
            return
        word, russian = random.choice(pairs)
        self._word = word.lower()
        self._russian = russian
        self._guessed = set()
        self._wrong = 0
        self._active = True
        self._draw.set_wrong(0)
        self._result_lbl.setText("")
        self._wrong_lbl.setText("Letras incorrectas: —")
        self._cat_lbl.setText(f"Categoría: {cat}")
        self._letter_input.setEnabled(True)
        self._letter_input.clear()
        self._letter_input.setFocus()
        self._refresh_word()

    def _refresh_word(self):
        parts = []
        for ch in self._word:
            if ch == " ":
                parts.append("  ")
            elif ch in self._guessed:
                parts.append(ch)
            else:
                parts.append("_")
        self._word_lbl.setText("  ".join(parts))

    def _guess(self):
        if not self._active:
            return
        ch = self._letter_input.text().strip().lower()
        self._letter_input.clear()
        self._letter_input.setFocus()
        if not ch or len(ch) != 1 or ch in self._guessed:
            return
        self._guessed.add(ch)
        if ch in self._word:
            self._refresh_word()
            if all(c in self._guessed or c == " " for c in self._word):
                self._active = False
                self._letter_input.setEnabled(False)
                self._result_lbl.setText(f"🎉 ¡Ganaste!\nEn ruso: {self._russian}")
                self._result_lbl.setStyleSheet("color:#2E7D32; font-size:16px;")
        else:
            self._wrong += 1
            self._draw.set_wrong(self._wrong)
            bad = sorted(c for c in self._guessed if c not in self._word)
            self._wrong_lbl.setText("Letras incorrectas: " + (", ".join(bad) if bad else "—"))
            if self._wrong >= self.MAX_WRONG:
                self._active = False
                self._letter_input.setEnabled(False)
                self._word_lbl.setText(self._word)
                self._result_lbl.setText(f"💀 ¡Perdiste!\nEra: «{self._word}»  →  {self._russian}")
                self._result_lbl.setStyleSheet("color:#C62828; font-size:16px;")


# ──────────────────────────────────────────────────────────────
# JUEGO 3: TRADUCCIÓN CRONOMETRADA
# ──────────────────────────────────────────────────────────────
class TraduccionDueloWidget(QWidget):
    INITIAL_TIME = 15.0

    _CARD_RU   = ("QFrame{background:qlineargradient(x1:0,y1:0,x2:0,y2:1,"
                  "stop:0 #1A237E,stop:1 #283593);border-radius:16px;}")
    _CARD_OK   = ("QFrame{background:qlineargradient(x1:0,y1:0,x2:0,y2:1,"
                  "stop:0 #1B5E20,stop:1 #2E7D32);border-radius:16px;}")
    _CARD_ERR  = ("QFrame{background:qlineargradient(x1:0,y1:0,x2:0,y2:1,"
                  "stop:0 #B71C1C,stop:1 #C62828);border-radius:16px;}")
    _CARD_SKIP = ("QFrame{background:qlineargradient(x1:0,y1:0,x2:0,y2:1,"
                  "stop:0 #37474F,stop:1 #455A64);border-radius:16px;}")
    _INPUT_BASE = ("QLineEdit{border:0;border-bottom:2px solid #FFCA28;"
                   "padding:8px;font-size:18px;background:white;color:#212121;}"
                   "QLineEdit:focus{border-bottom:2px solid #F9A825;}")
    _INPUT_OK   = ("QLineEdit{border:0;border-bottom:2px solid #4CAF50;"
                   "padding:8px;font-size:18px;background:#E8F5E9;color:#1B5E20;"
                   "font-weight:bold;}")
    _INPUT_ERR  = ("QLineEdit{border:0;border-bottom:2px solid #EF5350;"
                   "padding:8px;font-size:18px;background:#FFEBEE;color:#B71C1C;"
                   "font-weight:bold;}")

    def __init__(self):
        super().__init__()
        self._timer = QTimer()
        self._timer.setInterval(100)
        self._timer.timeout.connect(self._tick)
        self._time_left = self.INITIAL_TIME
        self._answer = ""
        self._score = 0
        self._total = 0
        self._active = False
        self._setup_ui()

    def _setup_ui(self):
        root = QVBoxLayout(self)
        root.setContentsMargins(14, 14, 14, 14)
        root.setSpacing(10)

        # ── Header ───────────────────────────────────────────
        header = QFrame()
        header.setStyleSheet("QFrame{background:#880E4F;border-radius:10px;}")
        hl = QHBoxLayout(header)
        hl.setContentsMargins(16, 10, 16, 10)
        t = QLabel("⏱ Traducción Cronometrada")
        t.setFont(QFont("Arial", 17, QFont.Bold))
        t.setStyleSheet("color:white;")
        hl.addWidget(t)
        hl.addStretch()
        self._score_lbl = QLabel("✓ 0 / 0")
        self._score_lbl.setFont(QFont("Arial", 15, QFont.Bold))
        self._score_lbl.setStyleSheet("color:#F48FB1;")
        hl.addWidget(self._score_lbl)
        root.addWidget(header)

        # ── Timer bar + seconds ──────────────────────────────
        tr = QHBoxLayout()
        tr.setSpacing(8)
        self._bar = QProgressBar()
        self._bar.setMaximum(100)
        self._bar.setValue(100)
        self._bar.setTextVisible(False)
        self._bar.setFixedHeight(22)
        tr.addWidget(self._bar)
        self._timer_lbl = QLabel("15.0s")
        self._timer_lbl.setFont(QFont("Arial", 14, QFont.Bold))
        self._timer_lbl.setFixedWidth(52)
        self._timer_lbl.setAlignment(Qt.AlignCenter)
        tr.addWidget(self._timer_lbl)
        root.addLayout(tr)

        # ── Two-column: question+answer | history ────────────
        cols = QHBoxLayout()
        cols.setSpacing(14)

        left = QVBoxLayout()
        left.setSpacing(8)

        # Language direction badge row
        dir_row = QHBoxLayout()
        dir_row.setSpacing(6)
        ru_b = QLabel("  РУС  ")
        ru_b.setFont(QFont("Arial", 11, QFont.Bold))
        ru_b.setStyleSheet(
            "background:#283593;color:white;border-radius:5px;padding:3px 8px;")
        dir_row.addWidget(ru_b)
        arr = QLabel("→")
        arr.setFont(QFont("Arial", 14, QFont.Bold))
        arr.setStyleSheet("color:#9E9E9E;")
        dir_row.addWidget(arr)
        es_b = QLabel("  ESP  ")
        es_b.setFont(QFont("Arial", 11, QFont.Bold))
        es_b.setStyleSheet(
            "background:#B71C1C;color:white;border-radius:5px;padding:3px 8px;")
        dir_row.addWidget(es_b)
        dir_row.addStretch()
        left.addLayout(dir_row)

        # Russian phrase card
        self._card = QFrame()
        self._card.setStyleSheet(self._CARD_RU)
        self._card.setMinimumHeight(115)
        cl = QVBoxLayout(self._card)
        cl.setAlignment(Qt.AlignCenter)
        self._phrase_lbl = QLabel("")
        self._phrase_lbl.setFont(QFont("Arial", 28, QFont.Bold))
        self._phrase_lbl.setAlignment(Qt.AlignCenter)
        self._phrase_lbl.setWordWrap(True)
        self._phrase_lbl.setStyleSheet("color:white;padding:10px;")
        cl.addWidget(self._phrase_lbl)
        left.addWidget(self._card, 1)

        # Answer area (styled frame)
        ans_frame = QFrame()
        ans_frame.setStyleSheet(
            "QFrame{background:#FFFDE7;border:2px solid #FFCA28;border-radius:12px;}")
        af = QVBoxLayout(ans_frame)
        af.setContentsMargins(12, 8, 12, 8)
        af.setSpacing(4)
        hint_lbl = QLabel("Tu traducción al español:")
        hint_lbl.setStyleSheet(
            "color:#795548;font-size:11px;font-weight:bold;border:none;background:transparent;")
        af.addWidget(hint_lbl)
        self._input = QLineEdit()
        self._input.setPlaceholderText("Escribe aquí y pulsa Enter…")
        self._input.setFont(QFont("Arial", 18))
        self._input.setAlignment(Qt.AlignCenter)
        self._input.setStyleSheet(self._INPUT_BASE)
        self._input.returnPressed.connect(self._check)
        af.addWidget(self._input)
        left.addWidget(ans_frame)

        # Feedback
        self._fb_lbl = QLabel("")
        self._fb_lbl.setFont(QFont("Arial", 14, QFont.Bold))
        self._fb_lbl.setAlignment(Qt.AlignCenter)
        self._fb_lbl.setWordWrap(True)
        self._fb_lbl.setMinimumHeight(36)
        left.addWidget(self._fb_lbl)

        # Buttons
        br = QHBoxLayout()
        self._start_btn = QPushButton("▶  Empezar")
        self._start_btn.setFont(QFont("Arial", 13, QFont.Bold))
        self._start_btn.setFixedHeight(40)
        self._start_btn.setStyleSheet(
            "QPushButton{background:#880E4F;color:white;border-radius:8px;}"
            "QPushButton:hover{background:#AD1457;}")
        self._start_btn.clicked.connect(self._start)
        br.addWidget(self._start_btn)
        self._skip_btn = QPushButton("⏭  Saltar")
        self._skip_btn.setFont(QFont("Arial", 13))
        self._skip_btn.setFixedHeight(40)
        self._skip_btn.setStyleSheet(
            "QPushButton{background:#E65100;color:white;border-radius:8px;}"
            "QPushButton:hover{background:#EF6C00;}")
        self._skip_btn.clicked.connect(self._skip)
        self._skip_btn.setEnabled(False)
        br.addWidget(self._skip_btn)
        left.addLayout(br)

        cols.addLayout(left, 3)

        # History panel
        hf = QFrame()
        hf.setStyleSheet(
            "QFrame{background:#FAFAFA;border:1px solid #E0E0E0;border-radius:12px;}")
        hf.setFixedWidth(230)
        hfl = QVBoxLayout(hf)
        hfl.setContentsMargins(10, 10, 10, 10)
        hfl.setSpacing(6)
        ht = QLabel("Historial")
        ht.setFont(QFont("Arial", 11, QFont.Bold))
        ht.setStyleSheet("color:#546E7A;border-bottom:1px solid #CFD8DC;padding-bottom:4px;")
        hfl.addWidget(ht)
        hs = QScrollArea()
        hs.setWidgetResizable(True)
        hs.setStyleSheet("QScrollArea{border:none;background:transparent;}")
        hc = QWidget()
        hc.setStyleSheet("background:transparent;")
        self._hist_layout = QVBoxLayout(hc)
        self._hist_layout.setAlignment(Qt.AlignTop)
        self._hist_layout.setSpacing(3)
        hs.setWidget(hc)
        hfl.addWidget(hs)
        cols.addWidget(hf, 0)

        root.addLayout(cols, 1)

    # ── Game logic ───────────────────────────────────────────

    def _start(self):
        self._score = 0
        self._total = 0
        self._active = True
        clear_layout(self._hist_layout)
        self._skip_btn.setEnabled(True)
        self._start_btn.setText("⏹  Reiniciar")
        self._next()

    def _next(self):
        if not self._active:
            return
        russian, spanish = random.choice(TRANSLATION_PHRASES)
        self._answer = spanish
        self._phrase_lbl.setText(russian)
        self._card.setStyleSheet(self._CARD_RU)
        self._input.clear()
        self._input.setStyleSheet(self._INPUT_BASE)
        self._fb_lbl.setText("")
        self._time_left = self.INITIAL_TIME
        self._update_bar()
        self._timer.start()
        self._input.setFocus()

    def _tick(self):
        self._time_left -= 0.1
        self._update_bar()
        if self._time_left <= 0:
            self._time_up()

    def _update_bar(self):
        pct = max(0, int(100 * self._time_left / self.INITIAL_TIME))
        self._bar.setValue(pct)
        secs = max(0.0, self._time_left)
        self._timer_lbl.setText(f"{secs:.1f}s")
        color = "#4CAF50" if pct > 50 else "#FF9800" if pct > 25 else "#F44336"
        self._bar.setStyleSheet(
            f"QProgressBar{{background:#E0E0E0;border-radius:6px;}}"
            f"QProgressBar::chunk{{background:{color};border-radius:6px;}}")
        self._timer_lbl.setStyleSheet(
            f"color:{color};font-weight:bold;font-size:14px;")

    def _time_up(self):
        self._timer.stop()
        self._total += 1
        self._score_lbl.setText(f"✓ {self._score} / {self._total}")
        self._card.setStyleSheet(self._CARD_ERR)
        self._fb_lbl.setText(f"⏰ Tiempo  →  {self._answer}")
        self._fb_lbl.setStyleSheet("color:#C62828; font-size:14px;")
        self._add_history(False, self._phrase_lbl.text(), self._answer)
        QTimer.singleShot(2500, self._next)

    def _check(self):
        if not self._active:
            return
        self._timer.stop()
        given = self._input.text().strip()
        self._total += 1
        norm = lambda s: re.sub(r'[¿?¡!.,]', '', s).strip().lower()
        if norm(given) == norm(self._answer):
            self._score += 1
            self._card.setStyleSheet(self._CARD_OK)
            self._input.setStyleSheet(self._INPUT_OK)
            self._fb_lbl.setText("✅ ¡Correcto!")
            self._fb_lbl.setStyleSheet("color:#2E7D32; font-size:14px;")
            self._add_history(True, self._phrase_lbl.text(), given)
        else:
            self._card.setStyleSheet(self._CARD_ERR)
            self._input.setStyleSheet(self._INPUT_ERR)
            self._fb_lbl.setText(f"❌  Era:  {self._answer}")
            self._fb_lbl.setStyleSheet("color:#C62828; font-size:14px;")
            self._add_history(False, self._phrase_lbl.text(), self._answer)
        self._score_lbl.setText(f"✓ {self._score} / {self._total}")
        QTimer.singleShot(2000, self._next)

    def _skip(self):
        if not self._active:
            return
        self._timer.stop()
        self._total += 1
        self._score_lbl.setText(f"✓ {self._score} / {self._total}")
        self._card.setStyleSheet(self._CARD_SKIP)
        self._fb_lbl.setText(f"⏭ Saltado  →  {self._answer}")
        self._fb_lbl.setStyleSheet("color:#795548; font-size:14px;")
        self._add_history(None, self._phrase_lbl.text(), self._answer)
        QTimer.singleShot(2000, self._next)

    def _add_history(self, ok, russian, answer):
        if ok is True:
            icon, color = "✅", "#2E7D32"
        elif ok is False:
            icon, color = "❌", "#C62828"
        else:
            icon, color = "⏭", "#795548"
        lbl = QLabel(f"{icon} {answer}")
        lbl.setFont(QFont("Arial", 10))
        lbl.setStyleSheet(
            f"color:{color};padding:2px 4px;"
            "border-bottom:1px solid #EEEEEE;")
        lbl.setWordWrap(True)
        lbl.setToolTip(russian)
        self._hist_layout.insertWidget(0, lbl)
        while self._hist_layout.count() > 15:
            item = self._hist_layout.takeAt(self._hist_layout.count() - 1)
            if item.widget():
                item.widget().deleteLater()


# ──────────────────────────────────────────────────────────────
# JUEGO 4: SERPIENTE DE PALABRAS
# ──────────────────────────────────────────────────────────────
class SerpientePalabrasWidget(QWidget):
    TIME_PER_WORD = 20.0

    def __init__(self):
        super().__init__()
        self._timer = QTimer()
        self._timer.setInterval(100)
        self._timer.timeout.connect(self._tick)
        self._time_left = self.TIME_PER_WORD
        self._used = []
        self._current_letter = ""
        self._score = 0
        self._active = False
        self._setup_ui()

    def _setup_ui(self):
        root = QVBoxLayout(self)
        root.setAlignment(Qt.AlignTop)

        title = QLabel("🐍 Serpiente de Palabras")
        title.setFont(QFont("Arial", 22, QFont.Bold))
        title.setAlignment(Qt.AlignCenter)
        root.addWidget(title)

        sub = QLabel("La siguiente palabra debe empezar con la última letra de la anterior.\nUsa el vocabulario español del programa.")
        sub.setAlignment(Qt.AlignCenter)
        sub.setStyleSheet("color:#546E7A; font-size:13px;")
        sub.setWordWrap(True)
        root.addWidget(sub)

        top = QHBoxLayout()
        top.addWidget(QLabel("Categoría inicial:"))
        self._cat_combo = QComboBox()
        self._cat_combo.addItems(list(THEMED_WORDS.keys()))
        top.addWidget(self._cat_combo)
        self._start_btn = QPushButton("▶  Empezar")
        self._start_btn.setStyleSheet(
            "QPushButton{background:#2E7D32;color:white;border-radius:5px;padding:6px 14px;}"
            "QPushButton:hover{background:#388E3C;}")
        self._start_btn.clicked.connect(self._start)
        top.addWidget(self._start_btn)
        root.addLayout(top)

        self._bar = QProgressBar()
        self._bar.setMaximum(100)
        self._bar.setValue(100)
        self._bar.setTextVisible(False)
        self._bar.setFixedHeight(14)
        root.addWidget(self._bar)

        info = QHBoxLayout()
        self._score_lbl = QLabel("Palabras: 0")
        self._score_lbl.setFont(QFont("Arial", 15, QFont.Bold))
        info.addWidget(self._score_lbl)
        info.addStretch()
        self._prompt_lbl = QLabel("Empieza con: —")
        self._prompt_lbl.setFont(QFont("Arial", 20, QFont.Bold))
        self._prompt_lbl.setStyleSheet("color:#E65100;")
        info.addWidget(self._prompt_lbl)
        root.addLayout(info)

        chain_scroll = QScrollArea()
        chain_scroll.setWidgetResizable(True)
        chain_scroll.setFixedHeight(180)
        chain_cont = QWidget()
        self._chain_layout = QVBoxLayout(chain_cont)
        self._chain_layout.setAlignment(Qt.AlignTop)
        chain_scroll.setWidget(chain_cont)
        self._chain_scroll = chain_scroll
        root.addWidget(chain_scroll)

        inp = QHBoxLayout()
        self._word_input = QLineEdit()
        self._word_input.setPlaceholderText("Escribe una palabra en español...")
        self._word_input.setFont(QFont("Arial", 19))
        self._word_input.returnPressed.connect(self._submit)
        inp.addWidget(self._word_input)
        send = QPushButton("Enviar")
        send.setFont(QFont("Arial", 13))
        send.setStyleSheet("background:#1565C0;color:white;border-radius:5px;padding:6px 14px;")
        send.clicked.connect(self._submit)
        inp.addWidget(send)
        root.addLayout(inp)

        self._fb_lbl = QLabel("")
        self._fb_lbl.setFont(QFont("Arial", 14))
        self._fb_lbl.setAlignment(Qt.AlignCenter)
        root.addWidget(self._fb_lbl)

    def _start(self):
        self._active = False
        self._timer.stop()
        clear_layout(self._chain_layout)
        self._used = []
        self._score = 0
        self._fb_lbl.setText("")

        cat = self._cat_combo.currentText()
        cat_words = [w.lower() for w, _ in THEMED_WORDS.get(cat, [])]
        if not cat_words:
            return
        first = random.choice(cat_words)
        self._used.append(first)
        self._score = 1
        self._current_letter = first[-1]
        self._add_to_chain(first, "#1565C0")
        self._prompt_lbl.setText(f"Empieza con: {self._current_letter.upper()}")
        self._score_lbl.setText(f"Palabras: {self._score}")
        self._word_input.clear()
        self._word_input.setEnabled(True)
        self._word_input.setFocus()
        self._active = True
        self._start_btn.setText("🔄  Reiniciar")
        self._time_left = self.TIME_PER_WORD
        self._update_bar()
        self._timer.start()

    def _add_to_chain(self, word, color="#2E7D32"):
        lbl = QLabel(word)
        lbl.setFont(QFont("Arial", 15, QFont.Bold))
        lbl.setStyleSheet(f"color:{color}; padding:2px 6px;")
        self._chain_layout.addWidget(lbl)
        QTimer.singleShot(30, lambda: self._chain_scroll.verticalScrollBar().setValue(
            self._chain_scroll.verticalScrollBar().maximum()))

    def _tick(self):
        self._time_left -= 0.1
        self._update_bar()
        if self._time_left <= 0:
            self._time_up()

    def _update_bar(self):
        pct = max(0, int(100 * self._time_left / self.TIME_PER_WORD))
        self._bar.setValue(pct)
        color = "#4CAF50" if pct > 50 else "#FF9800" if pct > 25 else "#F44336"
        self._bar.setStyleSheet(f"QProgressBar::chunk{{background:{color};}}")

    def _time_up(self):
        self._timer.stop()
        self._active = False
        self._word_input.setEnabled(False)
        self._fb_lbl.setText(f"⏰ ¡Se acabó el tiempo!  Palabras encadenadas: {self._score}")
        self._fb_lbl.setStyleSheet("color:#C62828; font-size:15px; font-weight:bold;")
        self._start_btn.setText("▶  Empezar")

    def _submit(self):
        if not self._active:
            return
        word = self._word_input.text().strip().lower()
        self._word_input.clear()
        if not word:
            return

        if not word.startswith(self._current_letter):
            self._fb_lbl.setText(f"❌ Debe empezar con «{self._current_letter.upper()}»")
            self._fb_lbl.setStyleSheet("color:#C62828;")
            return

        if word in self._used:
            self._fb_lbl.setText(f"❌ «{word}» ya fue usada")
            self._fb_lbl.setStyleSheet("color:#C62828;")
            return

        if word not in ALL_VOCAB_WORDS:
            self._fb_lbl.setText(f"❌ «{word}» no está en el vocabulario del programa")
            self._fb_lbl.setStyleSheet("color:#C62828;")
            return

        self._timer.stop()
        self._used.append(word)
        self._score += 1
        self._current_letter = word[-1]
        self._add_to_chain(word)
        self._prompt_lbl.setText(f"Empieza con: {self._current_letter.upper()}")
        self._score_lbl.setText(f"Palabras: {self._score}")
        self._fb_lbl.setText(f"✅ ¡Bien!  Siguiente: «{self._current_letter.upper()}»")
        self._fb_lbl.setStyleSheet("color:#2E7D32;")

        remaining = [w for w in ALL_VOCAB_WORDS
                     if w.startswith(self._current_letter) and w not in self._used]
        if not remaining:
            self._active = False
            self._word_input.setEnabled(False)
            self._fb_lbl.setText(
                f"🏆 ¡Increíble! No quedan palabras con «{self._current_letter.upper()}». "
                f"¡Ganaste con {self._score} palabras!")
            self._fb_lbl.setStyleSheet("color:#2E7D32; font-weight:bold; font-size:15px;")
            self._start_btn.setText("▶  Empezar")
            return

        self._time_left = self.TIME_PER_WORD
        self._update_bar()
        self._timer.start()
        self._word_input.setFocus()


# ──────────────────────────────────────────────────────────────
# MAIN WINDOW
# ──────────────────────────────────────────────────────────────
class VocabularyTrainerApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Spanish Vocabulary Trainer")
        self.setGeometry(50, 50, 1400, 900)

        self.current_config = None
        self.current_image_pixmap = None
        self.total_zones = 0
        self.correct_count = 0
        self.ask_labels = True
        self.draggable_squares = {}

        self.init_ui()

    def init_ui(self):
        central = QWidget()
        self.setCentralWidget(central)
        self.tabs = QTabWidget()
        QVBoxLayout(central).addWidget(self.tabs)
        self._build_editor_tab()
        self._build_practice_tab()
        self.tabs.addTab(ConjugacionRapidaWidget(), "⚡ Conjugación")
        self.tabs.addTab(AhorcadoWidget(),           "🎯 Ahorcado")
        self.tabs.addTab(TraduccionDueloWidget(),    "⏱ Traducción")
        self.tabs.addTab(SerpientePalabrasWidget(),  "🐍 Serpiente")

    @staticmethod
    def _bold_font(size=None):
        f = QFont()
        f.setBold(True)
        if size:
            f.setPointSize(size)
        return f

    # ─── EDITOR TAB ──────────────────────────────────────────
    def _build_editor_tab(self):
        tab = QWidget()
        layout = QHBoxLayout(tab)

        left = QVBoxLayout()
        btns = QHBoxLayout()
        for text, slot in [
            ("Paste Image (Ctrl+V)", self.paste_image),
            ("Load Image File", self.load_image_file),
            ("Undo Last", self.undo_rect),
            ("Clear All", self.clear_rects),
            ("Save Configuration", self.save_config),
        ]:
            b = QPushButton(text)
            b.clicked.connect(slot)
            btns.addWidget(b)
        left.addLayout(btns)

        self.canvas = DrawableImageLabel()
        self.canvas.rectangleDrawn.connect(self._on_rect_drawn)
        left.addWidget(self.canvas, 1)
        layout.addLayout(left, 3)

        right = QVBoxLayout()

        # Drawing mode selector
        mode_frame = QFrame()
        mode_frame.setStyleSheet("QFrame { border: 1px solid #ccc; border-radius: 5px; padding: 5px; }")
        mode_layout = QVBoxLayout(mode_frame)
        mode_title = QLabel("Drawing mode:")
        mode_title.setFont(self._bold_font())
        mode_layout.addWidget(mode_title)

        self.mode_word_radio = QRadioButton("Vocabulary word (students will drag this)")
        self.mode_word_radio.setChecked(True)
        self.mode_word_radio.setStyleSheet("color: #d32f2f; font-weight: bold;")

        cover_row = QHBoxLayout()
        self.mode_cover_radio = QRadioButton("Cover only (permanently hidden)")
        self.mode_cover_radio.setStyleSheet("color: #424242; font-weight: bold;")
        cover_row.addWidget(self.mode_cover_radio)

        self.color_btn = QPushButton()
        self.color_btn.setFixedSize(28, 28)
        self.color_btn.setToolTip("Pick cover color")
        self._update_color_btn(QColor(80, 80, 80))
        self.color_btn.clicked.connect(self._pick_cover_color)
        cover_row.addWidget(self.color_btn)

        self.mode_group = QButtonGroup()
        self.mode_group.addButton(self.mode_word_radio)
        self.mode_group.addButton(self.mode_cover_radio)
        self.mode_word_radio.toggled.connect(self._on_mode_changed)

        mode_layout.addWidget(self.mode_word_radio)
        mode_layout.addLayout(cover_row)
        right.addWidget(mode_frame)

        self.label_checkbox = QCheckBox("Ask for Russian translation after each word")
        self.label_checkbox.setChecked(True)
        self.label_checkbox.toggled.connect(lambda v: setattr(self, 'ask_labels', v))
        right.addWidget(self.label_checkbox)

        instructions = QLabel(
            "1. Paste or load an image\n"
            "2. Select mode: Vocabulary or Cover\n"
            "3. Draw rectangles on the image\n"
            "4. Save configuration\n"
            "5. Students load it in the Practice tab"
        )
        instructions.setStyleSheet("background: #e3f2fd; padding: 10px; border-radius: 5px;")
        right.addWidget(instructions)

        self.rect_count_label = QLabel("Rectangles: 0")
        self.rect_count_label.setFont(self._bold_font())
        right.addWidget(self.rect_count_label)

        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        container = QWidget()
        self.rects_list_layout = QVBoxLayout(container)
        scroll.setWidget(container)
        right.addWidget(scroll, 1)

        layout.addLayout(right, 1)
        self.tabs.addTab(tab, "Editor")

    # ─── PRACTICE TAB ────────────────────────────────────────
    def _build_practice_tab(self):
        tab = QWidget()
        layout = QHBoxLayout(tab)

        # Left: the image (drop target)
        left = QVBoxLayout()
        btns = QHBoxLayout()
        for text, slot in [
            ("Load Configuration", self.load_config),
            ("Reset Exercise", self.reset_practice),
        ]:
            b = QPushButton(text)
            b.clicked.connect(slot)
            btns.addWidget(b)

        self.show_original_btn = QPushButton("Show Original Image")
        self.show_original_btn.setCheckable(True)
        self.show_original_btn.setStyleSheet(
            "QPushButton { background: #1976D2; color: white; font-weight: bold; padding: 4px 10px; border-radius: 4px; }"
            "QPushButton:checked { background: #e53935; }"
        )
        self.show_original_btn.toggled.connect(self._on_show_original_toggled)
        btns.addWidget(self.show_original_btn)

        # Zoom controls
        zoom_out_btn = QPushButton("−")
        zoom_out_btn.setFixedWidth(28)
        zoom_out_btn.setToolTip("Zoom out (Ctrl+Scroll)")
        btns.addWidget(zoom_out_btn)

        self.zoom_label = QLabel("100%")
        self.zoom_label.setFixedWidth(46)
        self.zoom_label.setAlignment(Qt.AlignCenter)
        self.zoom_label.setToolTip("Current zoom level")
        btns.addWidget(self.zoom_label)

        zoom_in_btn = QPushButton("+")
        zoom_in_btn.setFixedWidth(28)
        zoom_in_btn.setToolTip("Zoom in (Ctrl+Scroll)")
        btns.addWidget(zoom_in_btn)

        zoom_reset_btn = QPushButton("1:1")
        zoom_reset_btn.setFixedWidth(36)
        zoom_reset_btn.setToolTip("Reset zoom to 100%")
        btns.addWidget(zoom_reset_btn)

        btns.addWidget(QLabel("Student:"))
        self.student_name_edit = QLineEdit()
        self.student_name_edit.setPlaceholderText("Enter student name...")
        self.student_name_edit.setMaximumWidth(200)
        btns.addWidget(self.student_name_edit)

        save_student_btn = QPushButton("Save to Student Folder")
        save_student_btn.clicked.connect(self.save_to_student_folder)
        btns.addWidget(save_student_btn)

        left.addLayout(btns)

        self.practice_image = PracticeImageWidget()
        self.practice_image.correctDrop.connect(self._on_correct_drop)
        self.practice_image.wrongDrop.connect(self._on_wrong_drop)
        self.practice_image.originalToggled.connect(self._on_image_clicked_toggle)
        self.practice_image.zoomChanged.connect(
            lambda f: self.zoom_label.setText(f"{int(round(f * 100))}%")
        )

        zoom_out_btn.clicked.connect(self.practice_image.zoom_out)
        zoom_in_btn.clicked.connect(self.practice_image.zoom_in)
        zoom_reset_btn.clicked.connect(self.practice_image.zoom_reset)

        practice_scroll = ZoomScrollArea()
        practice_scroll.setWidget(self.practice_image)
        practice_scroll.setWidgetResizable(False)
        practice_scroll.setAlignment(Qt.AlignCenter)
        self.practice_image._scroll_area = practice_scroll
        left.addWidget(practice_scroll, 1)

        layout.addLayout(left, 2)

        # Right: draggable pieces only (no drop zones)
        right = QVBoxLayout()
        lbl = QLabel("Drag each piece onto the image:")
        lbl.setFont(self._bold_font(12))
        right.addWidget(lbl)

        pieces_scroll = QScrollArea()
        pieces_scroll.setWidgetResizable(True)
        pieces_container = QWidget()
        self.pieces_layout = QVBoxLayout(pieces_container)
        self.pieces_layout.setAlignment(Qt.AlignTop)
        pieces_scroll.setWidget(pieces_container)
        right.addWidget(pieces_scroll, 1)

        self.score_label = QLabel("Correct: 0 / 0")
        self.score_label.setFont(self._bold_font(14))
        right.addWidget(self.score_label)

        layout.addLayout(right, 1)
        self.tabs.addTab(tab, "Practice")

    # ─── EDITOR ACTIONS ──────────────────────────────────────
    def _on_mode_changed(self, checked):
        if self.mode_word_radio.isChecked():
            self.canvas.draw_mode = 'word'
        else:
            self.canvas.draw_mode = 'cover'

    def _update_color_btn(self, color):
        """Update the color button to show the chosen color."""
        self.color_btn.setStyleSheet(
            f"background-color: {color.name()}; border: 2px solid #555; border-radius: 4px;"
        )

    def _pick_cover_color(self):
        """Open color picker and apply chosen color to the canvas."""
        color = QColorDialog.getColor(self.canvas.cover_color, self, "Pick Cover Color")
        if color.isValid():
            self.canvas.cover_color = color
            self._update_color_btn(color)
            self.canvas.refresh()

    def paste_image(self):
        if self.canvas.set_pixmap_from_clipboard():
            QMessageBox.information(self, "OK", "Image pasted! Draw rectangles over vocabulary words.")
        else:
            QMessageBox.warning(self, "No image", "No image found in clipboard.\nCopy an image first.")

    def load_image_file(self):
        path, _ = QFileDialog.getOpenFileName(self, "Open Image", "", "Images (*.png *.jpg *.jpeg *.bmp)")
        if path and self.canvas.load_from_file(path):
            QMessageBox.information(self, "OK", "Image loaded! Draw rectangles over vocabulary words.")

    def undo_rect(self):
        self.canvas.undo()
        self._refresh_rect_list()

    def clear_rects(self):
        self.canvas.clear_all()
        self._refresh_rect_list()

    def _on_rect_drawn(self):
        last = self.canvas.rectangles[-1]
        if last['type'] == 'cover':
            last['label'] = '(cover)'
        elif self.ask_labels:
            label, ok = QInputDialog.getText(
                self, "Russian Translation",
                "Enter the Russian meaning for this word:\n(leave empty to skip)"
            )
            if ok and label.strip():
                last['label'] = label.strip()
            else:
                last['label'] = f"Word {len(self.canvas.rectangles)}"
        else:
            last['label'] = f"Word {len(self.canvas.rectangles)}"
        self._refresh_rect_list()

    def _refresh_rect_list(self):
        clear_layout(self.rects_list_layout)
        rects = self.canvas.rectangles
        words = [r for r in rects if r.get('type') != 'cover']
        covers = [r for r in rects if r.get('type') == 'cover']
        self.rect_count_label.setText(f"Words: {len(words)}  |  Covers: {len(covers)}")
        for i, rd in enumerate(rects):
            rtype = rd.get('type', 'word')
            if rtype == 'cover':
                lbl = QLabel(f"{i+1}. [COVER]")
                lbl.setStyleSheet("color: #616161;")
            else:
                lbl = QLabel(f"{i+1}. {rd.get('label', '???')}")
                lbl.setStyleSheet("color: #d32f2f;")
            self.rects_list_layout.addWidget(lbl)

    def save_config(self):
        rects = self.canvas.rectangles
        if not rects:
            QMessageBox.warning(self, "Nothing", "Draw at least one rectangle first.")
            return
        if self.canvas.original_pixmap is None:
            QMessageBox.warning(self, "No Image", "Paste or load an image first.")
            return

        path, _ = QFileDialog.getSaveFileName(self, "Save As", "", "PNG (*.png);;JPEG (*.jpg)")
        if not path:
            return

        self.canvas.original_pixmap.save(path)
        config = {
            'image_file': Path(path).name,
            'rectangles': [
                {
                    'id': r['id'],
                    'type': r.get('type', 'word'),
                    'x': r['rect'].x(), 'y': r['rect'].y(),
                    'width': r['rect'].width(), 'height': r['rect'].height(),
                    'label': r.get('label', ''),
                    **({'color': r['color']} if 'color' in r else {}),
                }
                for r in rects
            ]
        }
        cfg_path = Path(path).with_suffix('.json')
        with open(cfg_path, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        QMessageBox.information(self, "Saved", f"Image: {Path(path).name}\nConfig: {cfg_path.name}")

    # ─── PRACTICE ACTIONS ────────────────────────────────────
    def load_config(self):
        path, _ = QFileDialog.getOpenFileName(self, "Load Config", "", "JSON (*.json)")
        if not path:
            return
        try:
            with open(path, 'r', encoding='utf-8') as f:
                config = json.load(f)
            img_path = Path(path).parent / config['image_file']
            if not img_path.exists():
                QMessageBox.critical(self, "Error", f"Image not found:\n{img_path}")
                return
            pixmap = QPixmap(str(img_path))
            if pixmap.isNull():
                QMessageBox.critical(self, "Error", "Failed to load image.")
                return
            self.current_image_pixmap = pixmap
            self.current_config = config
            self._setup_practice(config, pixmap)
        except Exception as e:
            QMessageBox.critical(self, "Error", str(e))

    def _setup_practice(self, config, pixmap):
        clear_layout(self.pieces_layout)
        self.correct_count = 0
        self.draggable_squares = {}
        self.show_original_btn.blockSignals(True)
        self.show_original_btn.setChecked(False)
        self.show_original_btn.setText("Show Original Image")
        self.show_original_btn.blockSignals(False)

        all_rects = config['rectangles']
        word_rects = [rc for rc in all_rects if rc.get('type', 'word') != 'cover']
        self.total_zones = len(word_rects)

        # Set up the practice image (all rects: covers stay hidden, words are interactive)
        self.practice_image.setup(pixmap, all_rects)

        # Create draggable pieces only for word rects (shuffled)
        shuffled = list(word_rects)
        random.shuffle(shuffled)
        for rc in shuffled:
            r = QRect(rc['x'], rc['y'], rc['width'], rc['height'])
            piece = pixmap.copy(r)
            target_w = max(piece.width(), 120)
            scaled_piece = piece.scaledToWidth(target_w, Qt.SmoothTransformation)

            sq = DraggableSquare(scaled_piece, rc['id'])
            self.draggable_squares[rc['id']] = sq
            self.pieces_layout.addWidget(sq)

        self._update_score()
        self.tabs.setCurrentIndex(1)

    def _on_correct_drop(self, rect_id):
        self.correct_count += 1
        sq = self.draggable_squares.get(rect_id)
        if sq:
            sq.placed = True
            sq.setStyleSheet("border: 3px solid #4CAF50; border-radius: 5px; padding: 3px; background: #e8f5e9;")
            sq.setCursor(Qt.ForbiddenCursor)
        self._update_score()
        if self.correct_count == self.total_zones:
            QMessageBox.information(self, "Congratulations!", "All words placed correctly!")

    def _on_wrong_drop(self):
        pass

    def _on_image_clicked_toggle(self, showing):
        """Keep button in sync when image is clicked directly."""
        self.show_original_btn.blockSignals(True)
        self.show_original_btn.setChecked(showing)
        self.show_original_btn.setText("Hide Original Image" if showing else "Show Original Image")
        self.show_original_btn.blockSignals(False)

    def _on_show_original_toggled(self, checked):
        if checked:
            self.show_original_btn.setText("Hide Original Image")
            self.practice_image.show_original()
        else:
            self.show_original_btn.setText("Show Original Image")
            self.practice_image.hide_original()

    def _update_score(self):
        self.score_label.setText(f"Correct: {self.correct_count} / {self.total_zones}")

    def reset_practice(self):
        if self.current_config and self.current_image_pixmap:
            self._setup_practice(self.current_config, self.current_image_pixmap)

    # ─── STUDENT FOLDER ──────────────────────────────────────
    def save_to_student_folder(self):
        name = self.student_name_edit.text().strip()
        if not name:
            QMessageBox.warning(self, "No name", "Enter a student name first.")
            return
        if self.current_config is None or self.current_image_pixmap is None:
            QMessageBox.warning(self, "No exercise", "Load an exercise first.")
            return

        base = Path(__file__).parent / "students" / name
        base.mkdir(parents=True, exist_ok=True)

        img_name = self.current_config['image_file']
        self.current_image_pixmap.save(str(base / img_name))

        cfg_path = base / Path(img_name).with_suffix('.json').name
        with open(cfg_path, 'w', encoding='utf-8') as f:
            json.dump(self.current_config, f, indent=2, ensure_ascii=False)

        QMessageBox.information(self, "Saved", f"Exercise saved for '{name}' in:\n{base}")

    # ─── KEYBOARD ────────────────────────────────────────────
    def keyPressEvent(self, event):
        if event.key() == Qt.Key_V and event.modifiers() == Qt.ControlModifier:
            if self.tabs.currentIndex() == 0:
                self.paste_image()
        elif event.key() == Qt.Key_Z and event.modifiers() == Qt.ControlModifier:
            if self.tabs.currentIndex() == 0:
                self.undo_rect()
        super().keyPressEvent(event)


if __name__ == '__main__':
    app = QApplication(sys.argv)
    app.setStyle('Fusion')
    trainer = VocabularyTrainerApp()
    trainer.show()
    sys.exit(app.exec_())
