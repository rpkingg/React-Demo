import React from 'react';
export default class MemberDetail extends React.Component{

    handlerEdit(){
	    let item = {};
	    let editTabel = React.findDOMNode(this.refs.editTabel);
		let sex = editTabel.querySelector('#memberEditSex');
		let id = editTabel.querySelector('#memberEditId');

		item.name = editTabel.querySelector('#memberEditName').value.trim();
		item.like = editTabel.querySelector('#memberEditLike').value.trim();
		item.descrip = editTabel.querySelector('#memberEditDescrip').value.trim();
		item.sex = sex.options[sex.selectedIndex].value;
		item.id = id.options[id.selectedIndex].value;
		item.key = this.props.memberDetail.key;

		//表单验证
		if(item.name=='' || item.like=='' || item.descrip=='') {
			let tips = React.findDOMNode(this.refs.DtipsUnDone);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}

		this.props.editDetail(item);

		//此处应在返回修改成功信息后确认
		let tips = React.findDOMNode(this.refs.Dtips);
		tips.style.display = 'block';
		setTimeout(function(){
            tips.style.display = 'none';
		}, 1000);
	}

	handlerClose(){
	  this.props.closeDetail();
	}

	componentDidUpdate(){
	    if(this.props.memberDetail == null){}
		else {
			let selSex = React.findDOMNode(this.refs.selSex);
			for(let i=0; i<selSex.options.length; i++){
				if(selSex.options[i].value == this.props.memberDetail.info.sex){
				  selSex.options[i].selected = 'selected';
				  break;
				}
			}
			let selId = React.findDOMNode(this.refs.selId);
			for(let i=0; i<selId.options.length; i++) {
				if(selId.options[i].value == this.props.memberDetail.info.id){
				  selId.options[i].selected = 'selected';
				  break;
				}
			}

		}
	}

    render(){
	  let memberDetail = this.props.memberDetail;
	  if(!memberDetail)
	    return null;

	  return (
	      <div className="overLay" style={{'clear':'both'}}>
		    <table ref="editTabel">
			  <tbody>
			    <tr>
				  <th>姓名</th>
				  <td><input id='memberEditName' type="text" defaultValue={memberDetail.info.name}></input></td>
				</tr>
			    <tr>
				  <th>爱好</th>
				  <td><input id='memberEditLike' type="text" defaultValue={memberDetail.info.like}></input></td>
				</tr>
			    <tr>
				  <th>性别</th>
				  <td>
				    <select ref='selSex' id='memberEditSex'>
					  <option value="男">男</option>
					  <option value="女">女</option>
					</select>
				  </td>
				</tr>
				<tr>
				  <th>身份</th>
                  <td>
				    <select ref="selId" id='memberEditId'>
					  <option value="H5">H5</option>
					  <option value="IOS">IOS</option>
					  <option value="UI">UI</option>
					  <option value="Java">Java</option>
					</select>
				  </td>
				</tr>
			    <tr>
				  <th>个人描述</th>
				  <td><textarea id='memberEditDescrip' type="text" defaultValue={memberDetail.info.descrip}></textarea></td>
				</tr>
			  </tbody>
			</table>
			<p ref='Dtips' className='tips' style={{'text-align':'left','margin':'0 0 20px 50px;'}}>ok</p>
			<p ref='DtipsUnDone' className='tips' style={{'text-align':'left','margin':'0 0 20px 50px;'}}>看看还少啥</p>
			<button onClick={this.handlerEdit.bind(this)}>确认</button>
			<button onClick={this.handlerClose.bind(this)} style={{'margin-left':'20px'}}>我不想改了</button>
		  </div>
	  );
	}
}