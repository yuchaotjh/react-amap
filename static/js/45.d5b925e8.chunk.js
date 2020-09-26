(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[45],{1219:function(n,e,t){"use strict";t.r(e),e.default="Circle \u5706\u5f62\u7ec4\u4ef6\n===\n\n\u6784\u9020\u5706\u5f62\u5bf9\u8c61\uff0c\u901a\u8fc7CircleOptions\u6307\u5b9a\u591a\u8fb9\u5f62\u6837\u5f0f\n\n```jsx\nimport { Circle } from '@uiw/react-amap';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Circle } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map zoom={14} center={[116.400274, 39.905812]}>\n          <Circle\n            visiable={show}\n            radius={1000}\n            strokeColor=\"#fff\"\n            strokeWeight={2}\n            center={new AMap.LngLat(116.39,39.9)}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n[\u66f4\u591a\u53c2\u6570\u8bbe\u7f6e](https://github.com/uiwjs/react-amap/blob/268303de813050c7a02bb247930090ce5f162042/src/types/overlay.d.ts#L425-L475)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| radius | \u5706\u534a\u5f84\uff0c\u5355\u4f4d:\u7c73 | `number` | - |\n\n### \u4e8b\u4ef6\n\n[\u4e8b\u4ef6\u7c7b\u578b\u6587\u6863](https://github.com/uiwjs/react-amap/blob/268303de813050c7a02bb247930090ce5f162042/src/types/overlay.d.ts#L399-L424)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onHide | \u9690\u85cf | `(): void;` |\n| onShow | \u663e\u793a | `(): void;` |\n| onRightClick | \u9f20\u6807\u53f3\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onClick | \u9f20\u6807\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onTouchEnd | \u9f20\u6807\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onDblClick | \u9f20\u6807\u5de6\u952e\u53cc\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onTouchMove | \u89e6\u6478\u79fb\u52a8\u8fdb\u884c\u4e2d\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onTouchStart | \u89e6\u6478\u5f00\u59cb\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onMouseOut | \u9f20\u6807\u79fb\u51fa | `(event: MapsEvent): void;` |\n| onMouseOver | \u9f20\u6807\u7ecf\u8fc7 | `(event: MapsEvent): void;` |\n| onMouseUp | \u9f20\u6807\u62ac\u8d77 | `(event: MapsEvent): void;` |\n| onMouseDown | \u9f20\u6807\u6309\u4e0b | `(event: MapsEvent): void;` |"}}]);
//# sourceMappingURL=45.d5b925e8.chunk.js.map