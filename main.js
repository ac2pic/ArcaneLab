export default class ArcaneLab {
    constructor(mod) {
        this.mod = mod;
    }

    async registerResourceGenerators () {
        const mod = this.mod;
        await UtilityResourceManager.addResourceGenerator('custom-character-config', async () => {
            const response = await fetch(mod.resolvePath('character-configs/susie.json'));
            return {
                mod,
                config: await response.json()
            };
        });

        await UtilityResourceManager.addResourceGenerator('custom-character-config', async () => {
            const response = await fetch(mod.resolvePath('character-configs/susie-hacked.json'));
            return {
                mod,
                config: await response.json()
            };
        });
    }
}