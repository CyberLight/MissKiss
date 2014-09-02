describe('Miss Kiss', function(){
	var processor;
    beforeEach(function(){
       processor = new MissKissProcessor();
    });
   
    describe('Numbers', function(){
		it('should return numbers if not multiples of 3, 5 and 15', function(){
			expect(processor.process(1)).toBe(1);
		});
    });
   
    describe('Miss numbers', function(){
		it('should return "Miss" for numbers multiples of 3', function(){
			expect(processor.process(3)).toBe('Miss');
		});
    });
   
    describe('Kiss numbers', function(){
		it('should return "Kiss" for numbers multiples of 5', function(){
			expect(processor.process(5)).toBe('Kiss');
		});
    });
   
	describe('MissKiss numbers', function(){
		it('should return "MissKiss" for numbers multiples of 3 and 5', function(){
			expect(processor.process(15)).toBe('MissKiss');
		});
	});
	
	describe('Sequence of numbers', function(){   	
		using('should return original number', [1,2,7,11,13,17], function(value){
			expect(processor.process(value)).toBe(value);
		});
		
		describe('Sequence of Miss numbers', function(){
			using('should return "Miss"', [3,6,9,12,18,24,63], function(value){
				expect(processor.process(value)).toBe('Miss');
			});
		});
		
		describe('Sequence of Kiss numbers', function(){
			using('should return "Kiss"', [5,10,25,35], function(value){
				expect(processor.process(value)).toBe('Kiss');
			});
		});
		
		describe('Sequence of MissKiss numbers', function(){
			using('should return "MissKiss"', [15,30,45], function(value){
				expect(processor.process(value)).toBe('MissKiss');
			});
		});
    });
});