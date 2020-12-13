import { waitForReact, ReactSelector } from 'testcafe-react-selectors';

fixture `Basic end-to-end UI test`
    .page `http://localhost:3000`
    .beforeEach(async () => {
        await waitForReact();
    })

test('Changes subreddit to r/javascript when button clicked', async t => {
    
    const currentCategory = ReactSelector('PostList').find('span')

    await t
        .click(ReactSelector('CategoriesListItem').withKey('javascript'))

        .expect(currentCategory.innerText).eql('r/javascript')
})

test('Displays a minimum of 20 post cards on the main page', async t => {
    
    const postCards = ReactSelector('PostCard')

    await t
        .expect(postCards.count).gte(20)
})