"use client"
import { RetroRenderer } from '@/lib/blockly/retro';
import React, { useRef, useEffect, useState } from "react";
import * as Blockly from "blockly";
import { Xml } from "blockly";
import { javascriptGenerator } from "blockly/javascript";
import { useRouter } from "next/navigation";
import { Box } from "@/components/ui/8bit/box";
import { Button } from "@/components/ui/8bit/button";

// Register ONCE, outside the component
Blockly.blockRendering.register('retro', RetroRenderer);

export default function Chapter4() {
  const router = useRouter();
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // Use the full toolbox XML for all prebuilt blocks
  const toolbox = `
    <xml>
      <category name="Logic" colour="#5C81A6">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null"></block>
        <block type="logic_ternary"></block>
      </category>
      <category name="Loops" colour="#5CA65C">
        <block type="controls_repeat_ext"></block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for"></block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
      </category>
      <category name="Math" colour="#5C68A6">
        <block type="math_number"></block>
        <block type="math_arithmetic"></block>
        <block type="math_single"></block>
        <block type="math_trig"></block>
        <block type="math_constant"></block>
        <block type="math_number_property"></block>
        <block type="math_round"></block>
        <block type="math_on_list"></block>
        <block type="math_modulo"></block>
        <block type="math_constrain"></block>
        <block type="math_random_int"></block>
        <block type="math_random_float"></block>
      </category>
      <category name="Text" colour="#5CA699">
        <block type="text"></block>
        <block type="text_join"></block>
        <block type="text_append"></block>
        <block type="text_length"></block>
        <block type="text_isEmpty"></block>
        <block type="text_indexOf"></block>
        <block type="text_charAt"></block>
        <block type="text_getSubstring"></block>
        <block type="text_changeCase"></block>
        <block type="text_trim"></block>
        <block type="text_print"></block>
        <block type="text_prompt_ext"></block>
      </category>
      <category name="Lists" colour="#745CA6">
        <block type="lists_create_with"></block>
        <block type="lists_repeat"></block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf"></block>
        <block type="lists_getIndex"></block>
        <block type="lists_setIndex"></block>
        <block type="lists_getSublist"></block>
        <block type="lists_split"></block>
        <block type="lists_sort"></block>
      </category>
      <category name="Colour" colour="#A6745C">
        <block type="colour_picker"></block>
        <block type="colour_random"></block>
        <block type="colour_rgb"></block>
        <block type="colour_blend"></block>
      </category>
      <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>
      <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>
    </xml>
  `;

  useEffect(() => {
    if (blocklyDiv.current) {
      // Inject Blockly
      workspaceRef.current = Blockly.inject(blocklyDiv.current, {
        toolbox,
        renderer: "retro", // use your custom renderer
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        theme: Blockly.Themes.Classic,
      });

      // Preload the workspace with the goal: print "coding is cool"
      const xmlText = `
        <xml xmlns="https://developers.google.com/blockly/xml">
          <block type="text_print" x="20" y="20">
            <value name="TEXT">
            </value>
          </block>
          <block type="text" x="20" y="80">
            <field name="TEXT">coding is cool</field>
          </block>
        </xml>
      `;
      const xmlDom = Blockly.utils.xml.textToDom(xmlText);
      Xml.domToWorkspace(xmlDom, workspaceRef.current);

      // Listen for changes and update code
      workspaceRef.current.addChangeListener(() => {
        const generated = javascriptGenerator.workspaceToCode(workspaceRef.current!);
        setCode(generated);
      });

      return () => {
        workspaceRef.current?.dispose();
      };
    }
  }, []);

  const runCode = () => {
    if (workspaceRef.current) {
      const generated = javascriptGenerator.workspaceToCode(workspaceRef.current);
      let result = "";
      const print = (msg: any) => { result += msg + "\n"; };
      const originalAlert = window.alert;
      window.alert = print;
      try {
        // eslint-disable-next-line no-new-func
        Function("print", generated)(print);
        setOutput(result.trim());
      } catch (e) {
        setOutput("Error: " + (e as Error).message);
      }
      window.alert = originalAlert;
    }
  };

  const isGoalMet = output.trim() === "coding is cool";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100">
      <Box>
        <div
          ref={blocklyDiv}
          style={{
            width: "90vw",
            height: "40vh",
            background: "#222",
            borderRadius: 12,
            marginBottom: 16,
          }}
        />
      </Box>
      <Button
        className="bg-blue-600 text-white font-bold rounded-lg px-8 py-2 text-lg hover:bg-blue-700 transition mb-4"
        onClick={runCode}
      >
        Run
      </Button>
      <div className="w-full max-w-2xl rounded-lg p-4 mb-4 font-mono text-black min-h-[48px]">
        <Box className="font-bold">Output: {output}</Box>
      </div>
      {isGoalMet && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center">
            <div className="font-bold text-2xl mb-4 text-center text-black">Great job! 🎉</div>
            <button
              className="bg-yellow-300 text-black font-bold rounded-lg px-8 py-3 text-xl hover:bg-yellow-400 transition"
              onClick={() => router.push("/5")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}