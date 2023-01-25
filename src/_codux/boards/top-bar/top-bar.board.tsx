import { createBoard } from '@wixc3/react-board';
import { TopBar } from '../../../components/top-bar/top-bar';
import TopBar_module from '../../../components/top-bar/top-bar.module.scss';

export default createBoard({
    name: 'TopBar',
    Board: () => (
        <TopBar>
            <div className="main-container">
                {
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        className={TopBar_module['profile-image']}
                    />
                }
                <div>
                    <div>
                        <button>Connect</button>
                        <h3>John Doe</h3>
                        <p>john-doe</p>
                        <p>Member since 1986</p>
                    </div>

                    <div>
                        <p>Tel Aviv</p>
                        <p>john@doe.com</p>
                    </div>

                    <div>
                        <p>Tech Stack</p>
                    </div>
                </div>
            </div>
        </TopBar>
    ),
    environmentProps: {
        windowHeight: 447,
        canvasWidth: 736,
    },
});
