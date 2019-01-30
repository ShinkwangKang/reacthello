import React from 'react';
import MarkdownIt from 'markdown-it';
import moment from './Timer';

const md = new MarkdownIt();

const Preview = props => {
  return (
    // React 에서는 injection 공격을 대비해서 HTML 코드를 일반 문자열로만 인식함
    // 아래와 같이 명시적으로 지적해줘야 HTML 코드를 입력할 수 있다.
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(props.value),
      }}
    />
  );
};
class MarkEditor extends React.Component {
  render() {
    return (
      <div>
        <h2>마크다운 에디터</h2>
        <Preview value={'# markdown-it'} />
        <input type="text" defaultValue="" />
      </div>
    );
  }
}

export default MarkEditor;
