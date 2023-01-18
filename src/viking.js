// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health < damage) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health < damage) {
      return `A Saxon has died in combat`;
    }
  }
}

// War

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const attack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.pop(this.saxonArmy[0]);
    }
    return attack;
  }

  saxonAttack() {
    const attack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.pop(this.vikingArmy[0]);
    }
    return attack;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === this.saxonArmy.length) {
      return `Vikings and Saxons are still in the thick of battle.`;
    } else {
      return `The war is ongoing`;
    }
  }
}
const ragnar = new Viking("Ragnar", 100, 100);

const Etelstano = new Saxon(100, 20);

const firstWar = new War();

firstWar.addSaxon(Etelstano);
firstWar.addSaxon(Etelstano);
firstWar.addSaxon(Etelstano);
firstWar.addSaxon(Etelstano);
firstWar.addSaxon(Etelstano);

console.log(firstWar.saxonArmy);
console.log(firstWar.vikingArmy);

console.log(firstWar.showStatus());
