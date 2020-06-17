import React, { Component } from "react";

import { Editor } from "@tinymce/tinymce-react";

interface StateProps {}

interface DispatchProps {}
interface OwnProps {
  initialValue: String;
  handleEditorChange: Function;
}

type Props = StateProps & DispatchProps & OwnProps;

export default class EditorText extends Component<Props> {
  render() {
    const { initialValue, handleEditorChange } = this.props;
    return (
      <div className="col-sm-12">
        <Editor
          apiKey="xr374wnrz1dqxo07p1rl6smx76awlstenuu8r3tz7wd1kpmc"
          initialValue={"" + initialValue}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "image",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
          }}
          onChange={(e: any) => {
            let text = e?.target?.getContent();
            handleEditorChange(text);
          }}
        />
      </div>
    );
  }
}
