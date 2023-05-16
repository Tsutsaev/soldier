const soldier = {
    name: 'Халк',
    health: 10,
    weapon: {
      name: 'ПП',
      cartridges: 30,
    },
    supplies: 3,
  
    fire: function () {
        if(this.weapon.cartridges === 0) {
            console.log('обойма пуста. Перезаредитесь');
        }
        this.weapon.cartridges--
        console.log('бах-бах');
    },
    recharge: function () {
        this.weapon.cartridges === 30
        this.supplies--
        console.log('перезарядка...');
    },
    hurt: function () {
        this.health--
        if(this.health === 0) {
            console.log('Ты проиграл');
        }
    },
  };