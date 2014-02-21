'use strict';

describe('BP list', function() {
    beforeEach(function() {
        browser().navigateTo('/');
        sleep(1);
    });

    it('should list the bp records', function() {
        expect(repeater('tr').count()).toEqual(3);
    })
});
