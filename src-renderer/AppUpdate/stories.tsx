import { action } from '@storybook/addon-actions'
import AppUpdate, { AppUpdateProps } from '.'

export default {
  title: 'AppUpdate'
}

const getProps = (): AppUpdateProps => ({
  status: 'available',
  updateInfo: {
    version: '3.0.0',
    releaseNotes: [
      {
        version: '2.0.0',
        note: `<p>Discuss and give feedback about v3.0.0-alpha <a href="https://github.com/timche/gmail-desktop/discussions/242" data-hovercard-type="discussion" data-hovercard-url="/timche/gmail-desktop/discussions/242/hovercard">here</a>.</p><ul><li>macOS: render traffic lights space only when compact header is enabled <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/a2eb2bc27a30a5f8f2b08d6c1171e9a1fdfe1d1e/hovercard" href="https://github.com/timche/gmail-desktop/commit/a2eb2bc27a30a5f8f2b08d6c1171e9a1fdfe1d1e"><tt>a2eb2bc</tt></a></li><li>tweak add/edit account form <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/e6583e9c50496fbe37d888e27361a934d6669599/hovercard" href="https://github.com/timche/gmail-desktop/commit/e6583e9c50496fbe37d888e27361a934d6669599"><tt>e6583e9</tt></a></li><li>use <code>Add</code> instead of <code>Save</code> to add account <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/da39c9e8bf8b1539b0010ecece8b4acb2189faf2/hovercard" href="https://github.com/timche/gmail-desktop/commit/da39c9e8bf8b1539b0010ecece8b4acb2189faf2"><tt>da39c9e</tt></a></li><li>fix dock menu <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/c535917f87f585a573ed1615c8e9c9ffb6683ac8/hovercard" href="https://github.com/timche/gmail-desktop/commit/c535917f87f585a573ed1615c8e9c9ffb6683ac8"><tt>c535917</tt></a></li><li>add ability to select account from app/dock/tray menu <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/a192be1ac523250391f930ae3f7bf4a529b07519/hovercard" href="https://github.com/timche/gmail-desktop/commit/a192be1ac523250391f930ae3f7bf4a529b07519"><tt>a192be1</tt></a><ul><li>In the app menu it will also show each account's shortcut which is <kbd>Command/Control</kbd> <kbd>1</kbd>-<kbd>9</kbd></li></ul></li><li>add ability to open developer tools for gmail <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/42050b71ca6415edfea710e93d83e8f4b66c3ac1/hovercard" href="https://github.com/timche/gmail-desktop/commit/42050b71ca6415edfea710e93d83e8f4b66c3ac1"><tt>42050b7</tt></a><ul><li><code>View</code> → <code>Developer Tools</code> or <kbd>Command/Control</kbd> <kbd>Alt</kbd> <kbd>I</kbd> (macOS) / <kbd>Control</kbd> <kbd>Shift</kbd> <kbd>I</kbd> (Linux/Windows)</li></ul></li><li>add ability to reload gmail <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/fa4ee93e499ee89f36039f803e6a06cc2d50c61d/hovercard" href="https://github.com/timche/gmail-desktop/commit/fa4ee93e499ee89f36039f803e6a06cc2d50c61d"><tt>fa4ee93</tt></a><ul><li><code>View</code> → <code>Reload</code> or <kbd>Command/Control</kbd> <kbd>Shift</kbd> <kbd>R</kbd></li></ul></li><li>use user agent fix by default <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/7b674310a92af9fe0bcc8d2c63d0126a7aff4ef5/hovercard" href="https://github.com/timche/gmail-desktop/commit/7b674310a92af9fe0bcc8d2c63d0126a7aff4ef5"><tt>7b67431</tt></a><ul><li>Configurable with <code>Settings</code> → <code>Advanced</code> → <code>User Agent</code> → <code>Use User Agent Fix</code></li></ul></li><li>add ability to add/edit account with enter <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/15e84a2b39c128f595a5b8d5a603e1ed52f8635f/hovercard" href="https://github.com/timche/gmail-desktop/commit/15e84a2b39c128f595a5b8d5a603e1ed52f8635f"><tt>15e84a2</tt></a></li></ul><p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/8075074/111186997-7abc6180-85ab-11eb-9203-b3fdabc89573.png"><img src="https://user-images.githubusercontent.com/8075074/111186997-7abc6180-85ab-11eb-9203-b3fdabc89573.png" alt="Screen Shot 2021-03-15 at 16 28 13" style="max-width:100%;"></a></p>`
      },
      {
        version: '1.0.0',
        note:
          '<p>Discuss and give feedback about v3.0.0-alpha <a href="https://github.com/timche/gmail-desktop/discussions/242" data-hovercard-type="discussion" data-hovercard-url="/timche/gmail-desktop/discussions/242/hovercard">here</a>.</p><ul><li>fix burger menu offset when having multiple accounts <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/00d8387fa2c8d65e09a1b6a232ec301fc42e6a10/hovercard" href="https://github.com/timche/gmail-desktop/commit/00d8387fa2c8d65e09a1b6a232ec301fc42e6a10"><tt>00d8387</tt></a><ul><li>Bug was introduced in v3.0.0-alpha.4</li></ul></li><li>update app/dock/tray menu after removing account <a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/timche/gmail-desktop/commit/66599e562689ea1988c7637cb9e53a203e9f6d50/hovercard" href="https://github.com/timche/gmail-desktop/commit/66599e562689ea1988c7637cb9e53a203e9f6d50"><tt>66599e5</tt></a></li></ul>'
      }
    ]
  },
  downloadPercent: 33,
  onClickDownload: action('onClickDownload'),
  onToggleReleaseNotes: action('onToggleReleaseNotes'),
  onDismiss: action('onDismiss'),
  onCancelDownload: action('onCancelDownload'),
  onClickRestart: action('onClickRestart'),
  showReleaseNotes: true
})

export const Available = () => <AppUpdate {...getProps()} />

export const Downloading = () => (
  <AppUpdate {...getProps()} status="downloading" />
)

export const Install = () => <AppUpdate {...getProps()} status="install" />
