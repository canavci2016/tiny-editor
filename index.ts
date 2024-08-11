class history<T> {
    content: T;
    constructor(content: T) {
        this.content = content;
    }
}


class SnapShot {
    historyList: Array<history<string>> = [];

    save(content: string) {
        this.historyList.push(new history(content));
    }

}


class Tab {
    content: string = '';
    snapShot;

    constructor() {
        this.snapShot = new SnapShot();
    }

    write(content: string) {
        this.content += content;
    }

    save() {
        this.snapShot.save(this.content);
    }
}


class Editor {
    _activeTab: Tab | null = null;
    tabs: Tab[] = [];


    public set activeTab(v: Tab) {
        this._activeTab = v;
    }

    public get activeTab(): Tab | null {
        return this._activeTab;
    }

    openTab() {
        const newTab = new Tab();
        this._activeTab = newTab;
        this.tabs.push(newTab);
        return this._activeTab;
    }

    getTab(index: number) {
        return this.tabs[index] || null;
    }

    switchTab(index: number) {
        this.activeTab = this.getTab(index);
    }

    getTabs() {
        return this.tabs;
    }
}


const editorObj = new Editor();

const tab = editorObj.openTab();
tab.write("hello");
tab.write("\n hello");


tab.save();



tab.write("world ");
tab.write("\n world");
tab.save();

tab.write("world2 ");
tab.write("\n world2");


const tab2 = editorObj.openTab();
tab2.write("hello-tab2");
tab2.write("\n hello-tab2");
tab2.save();

console.log(tab2);
