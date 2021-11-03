"use strict";
let funcionario = {
    supervisors: ['supervisor1', 'supervisor2', 'supervisor'],
    checkPoint(time) {
        if (time <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
