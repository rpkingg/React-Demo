class memberItem {
    constructor(item){
        this.info = {};
        this.info.name = item.name;
        this.info.like = item.like || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.info.descrip = item.descrip || '';
        this.key = ++memberItem.key;
    }
}
memberItem.key = 0;

export default class Member {

    constructor(){
        this.allMember = [
            new memberItem(Member.rawData[0]),
            new memberItem(Member.rawData[1]),
            new memberItem(Member.rawData[2]),
            new memberItem(Member.rawData[3]),
            new memberItem(Member.rawData[4]),
            new memberItem(Member.rawData[5]),
            new memberItem(Member.rawData[6]),
            new memberItem(Member.rawData[7]),
            new memberItem(Member.rawData[8]),
            new memberItem(Member.rawData[9]),
            new memberItem(Member.rawData[10])
        ];
        this.member = [];
        this.filtType = 0;
        this.word = '';//搜索关键字
        this._filtMember(this.filtType);
    }

    //增
    addMemberItem(item) {
        let newItem = new memberItem(item);
        this.allMember.push(newItem);
        //筛选 搜索
        this._filtMember(this.filtType);
        this._searchMember(this.word);
        return this;
    }

    //删
    removeMemberItem(key) {
        let newMember = this.allMember.filter(item => {
            return item.key != key;
        });
        this.allMember = newMember;
        //筛选
        this._filtMember(this.filtType);
        this._searchMember(this.word);
        return this;
    }

    //改
    editMemberItem(item) {
        this.allMember.forEach(memberItem => {
            if(memberItem.key == item.key) {
                memberItem.info.name = item.name;
                memberItem.info.sex = item.sex;
                memberItem.info.like = item.like;
                memberItem.info.id = item.id;
                memberItem.info.descrip = item.descrip;
            }
        });
        this._filtMember(this.filtType);
        this._searchMember(this.word);
        return this;
    }

    //筛选
    _filtMember(filtType){
        this.filtType = filtType;
        switch(parseInt(filtType)){
            case 0:
                this.member = this.allMember;
                break;
            case 1:
                this.member = this.allMember.filter(item => {
                    return item.info.id == 'H5';
                });
                break;
            case 2:
                this.member = this.allMember.filter(item => {
                    return item.info.id == 'IOS';
                });
                break;
            case 3:
                this.member = this.allMember.filter(item => {
                    return item.info.id == 'UI';
                });
                break;
            case 4:
                this.member = this.allMember.filter(item => {
                    return item.info.id == 'Java';
                });
                break;
            default: break;
        }
    }



    //搜索
    _searchMember(word){
        this.word = word;
        //在member中搜索
        this.member = this.member.filter(item => {
            return item.info.name.indexOf(word)!=-1 ||
                (item.info.like+'').indexOf(word)!=-1 ||
                item.info.id.indexOf(word)!=-1 ||
                item.info.sex.indexOf(word)!=-1;
        });
    }

    filtMember(filtType){
        this._filtMember(filtType);
        this._searchMember(this.word);
        return this;
    }
    sortMember(sortType){
        this._filtMember(this.filtType);
        this._searchMember(this.word);
        return this;
    }
    searchMember(word){
        this._filtMember(this.filtType);
        this._searchMember(word);
        return this;
    }
}
//模拟数据库
Member.rawData = [{ descrip:'java开发工程师', sex: '男', like: '看书', name: '马云', id: 'java'},
    { descrip:'H5开发工程师', sex: '女', like: '画画', name: '雷军', id: 'H5'},
    { descrip:'IOS开发工程师', sex: '男', like: '骑马', name: '纳兰性德', id: 'IOS'},
    { descrip:'UI设计师', sex: '男', like: '吃饭', name: '奥巴马', id: 'UI'},
    { descrip:'H5开发工程师', sex: '女', like: '跳绳', name: '特朗普', id: 'H5'},
    { descrip:'IOS开发工程师', sex: '男', like: '喝果汁', name: '普京', id: 'IOS'},
    { descrip:'H5开发工程师', sex: '女', like: '看漫画', name: '吴彦祖', id: 'H5'},
    { descrip:'java开发工程师', sex: '男', like:  '射击', name: '韩红', id: 'java'},
    { descrip:'H5开发工程师', sex: '男', like: '游泳', name: '嬴政', id: 'H5'},
    { descrip:'IOS开发工程师', sex: '男', like: '倒立', name: '段誉', id: 'IOS'},
    { descrip:'IOS开发工程师', sex: '男', like: '坐在公交上看小说', name: '欧阳峰', id: 'IOS'}];