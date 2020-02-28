module.exports = {
    Monto: function(valor, moneda){
        this.moneda = function testMoneda(_moneda){
            var isMoneda = _moneda instanceof Moneda;
            if (!isMoneda){
                throw new Error("La moneda no es valida");
            }
            return _moneda;
        }(moneda);
        
        this.valor = function testValor(_valor){
            if (!Number.isInteger(_valor) || (_valor < 0)){
                throw new Error("Valor no debe ser menor a 0");
            }
            return _valor;
        }(valor);
        
        this.equals = function(monto) {
            var isMonto = monto instanceof Monto;
            if(isMonto && monto.moneda.equals(this.moneda) && monto.valor == this.valor) {
                return true;
            } else {
                return false;
            }
        };
        
        Object.freeze(this);
    }
}

