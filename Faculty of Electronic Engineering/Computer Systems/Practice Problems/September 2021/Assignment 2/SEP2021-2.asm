; Napisati9 program na asemblerskom jeziku koji odredjuje koliko reci iz recenice smestene od adrese TXT,
; sadrzi tacno tri slova "A", velika ili mala. Smatrati da su u recenici sve reci razdvojene jednim blanko znakom
; i da se recenica zavrsava tackom. Sve pirstupe memoriji realizovati instrukcijama za rad sa nizovima.     
;
; Dati primer ulaznih podataka i ocekivanu vrednost rezultata.


PODACI SEGMENT
    RECENICA db 'Anal kanaa Velik KanAal PenAAal KAaAaAaMen. aaa'     ; Primer recenice  
    TXT db 0        ; Pocetak recenice (ide do '.') 
PODACI ENDS
KOD SEGMENT  
    assume CS: kod, DS: podaci, ES: podaci
START:
            
    MOV AX, PODACI
    MOV DS, AX
    MOV ES, AX
    XOR AX,AX 
            
    ; DS:SI - Izvorisni string
    ; ES:DI - Odredisni string      
    
    
    CLD     ; Direction flag = 0 -> Left to Right
    LEA SI, RECENICA
    XOR BL, BL  ; BL = BROJ RECI U RECENICI SA TACNO 3 SLOVA 'a' ILI 'A'
    
    RESET:
    XOR AH, AH ; AH = BROJ SLOVA 'a' ili 'A'
    LOAD_NEXT:        
    LODSB   ; AL = TRENUTNI KARAKTER
         
    
    CMP AL, '.'
    JE END_OF_PROGRAM
    
    CMP AL, ' '
    JE IS_BLANK
    
    CMP AL, 'A'
    JE INC_COUNT
    
    CMP AL, 'a'
    JE INC_COUNT   
    JMP LOAD_NEXT
    
    
    INC_COUNT:
    INC AH
    JMP LOAD_NEXT
    
    IS_BLANK:
    CMP AH, 3
    JE REZ_INC
    JMP RESET
    
    REZ_INC:
    INC BL
    JMP RESET
    
    
    
    END_OF_PROGRAM:
    CMP AH, 3
    JNE SKIP
    INC BL  ; Kada je tacka na samom kraju, nece se registrovati da zadnja rec ima tacno 3 slova zbog uslova ispitivanja da je BR == 3 kod ' ' znaka
    SKIP:
            
    MOV AH, 4CH
    INT 21H       
           
KOD ENDS
END START