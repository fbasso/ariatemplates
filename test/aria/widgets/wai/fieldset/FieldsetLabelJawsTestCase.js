/*
 * Copyright 2015 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "test.aria.widgets.wai.fieldset.FieldsetLabelJawsTestCase",
    $extends : "aria.jsunit.JawsTestCase",
    $constructor : function () {
        this.$JawsTestCase.constructor.call(this);
        this.setTestEnv({
            template : "test.aria.widgets.wai.fieldset.FieldsetLabelJawsTestCaseTpl"
        });
        this.elementsToTest = "fsWaiEnabledStart";
    },
    $prototype : {
        runTemplateTest : function () {
            this._testElement();
        },
        _testElement : function () {
            var domElement = this.getElementById(this.elementsToTest);
            this.execute([["ensureVisible", domElement], ["click", domElement], ["pause", 1000],
                    ["type", null, "[down]"], ["pause", 1000], ["type", null, "[down]"], ["pause", 1000],
                    ["type", null, "[down]"], ["pause", 1000], ["type", null, "[down]"], ["pause", 1000]], {
                fn : this._testValue,
                scope : this
            });
        },
        _testValue : function () {
            this.assertJawsHistoryEquals(true, this._resetTest, function (response) {
                return /Group A\nradio button not checked Option A\nOption A\nEnd of template/.test(response);
            });
        },
        _resetTest : function () {
            this.end();
        }
    }
});
